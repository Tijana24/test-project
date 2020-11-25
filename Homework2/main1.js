const listItemsUL = document.getElementById('items');
const filter = document.getElementById('filter');

let focusedEl = undefined;
let listItemID = 0;
const listItemsArr = [];

// Insert new item
document.getElementById("submit").addEventListener('click', e => {

    e.preventDefault();

    let getInputText = document.getElementById('item').value;

    if (getInputText.length !== 0) listItemsUL.appendChild(createLIElement(getInputText));

    // If list items are filtered, insert item but do not display in search results
    if (filter.value.length !== 0) search();
});

function createLIElement(inputText) {

    // Create list item
    let li = document.createElement('LI');
    li.classList.add('list-group-item');
    li.tabIndex = 0;
    li.id = listItemID++;
    li.append(inputText);
    listItemsArr.push(li);

    // Create list item delete button
    let button = document.createElement('BUTTON');
    button.className = 'btn btn-danger btn-sm float-right delete';
    button.style.cursor = 'pointer';
    button.append('X');
    button.tabIndex = '-1';

    button.addEventListener('click', removeListItem);

    // Append button to list item
    li.appendChild(button);

    return li;
}

function removeListItem(e) {
    let listItem = e.target.parentElement;

    // Find target item in global array
    listItemsArr.some((item, i) => {

        if (listItem.id === item.id) {

            listItemsArr.splice(i, 1);
            listItem.remove();
        }
    })
}

function search(specificItem) {

    // Remove all list items
    removeAllElementChilds(listItemsUL);

    let getSearchInput = filter.value;

    // Loop through global array
    for (const listItem of listItemsArr) {

        const listItemText = listItem.firstChild.textContent;

        // If list item is clicked search and display clicked item
        if (!(typeof specificItem === 'undefined' || specificItem.target)) {

            if (listItem.id !== specificItem.id) continue;
            listItemsUL.appendChild(specificItem);

            break;
        }

        // Check if input filter exists in global array and starts with that word
        if (listItemText.toLowerCase().startsWith(getSearchInput.toLowerCase())) {
            listItemsUL.appendChild(listItem);
        }
    }
}

function removeAllElementChilds(parent) {

    while (parent.firstElementChild) {
        parent.firstElementChild.remove();
    }
}

// Filter list items
filter.addEventListener('keyup', search);

// When clicked on list item, search for that item
listItemsUL.addEventListener('click', e => {

    if (!e.target.classList.contains('delete')) {

        filter.value = e.target.firstChild.textContent;

        search(e.target);
    }
})

// Detect up and down keys
document.body.addEventListener('keydown', e => {

    if (listItemsUL.children.length !== 0) {

        if (!focusedEl && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {

            focusedEl = listItemsUL.firstElementChild;
            focusedEl.focus();

        } else if (focusedEl) {

            if (focusedEl.nextElementSibling !== null && e.key === 'ArrowDown') {
                focusedEl = focusedEl.nextElementSibling;
                focusedEl.focus();

            } else if (focusedEl.nextElementSibling === null && e.key === 'ArrowDown') {

                focusedEl = listItemsUL.firstElementChild;
                focusedEl.focus();

            } else if (focusedEl.previousElementSibling !== null && e.key === 'ArrowUp') {

                focusedEl = focusedEl.previousElementSibling;
                focusedEl.focus();

            } else if (focusedEl.previousElementSibling === null && e.key === 'ArrowUp') {

                focusedEl = listItemsUL.lastElementChild;
                focusedEl.focus();

            }
        }
    }

    // On enter change add item input value
    if (e.key === 'Enter' && listItemsUL.contains(e.target)) {

        document.getElementById('item').value = e.target.firstChild.textContent;
    }
});

// Remove focus if it is clicked outside of list
document.addEventListener('click', e => {

    if (!listItemsUL.contains(e.target)) focusedEl = undefined;
});


// Before leaving page set items to localstorage
window.addEventListener('beforeunload', () => {

    // Empty local storage and fill with items before leaving page
    localStorage.clear();

    for (let i = 0; i < listItemsArr.length; i++) {

        localStorage.setItem(`listItem${i}`, listItemsArr[i].firstChild.textContent);
    }
});

// When DOM content is loaded fetch and display local storage items
window.addEventListener('DOMContentLoaded', () => {

    if (localStorage.length > 0) {

        for (let i = 0; i < localStorage.length; i++) {

            let localStorageItemText = localStorage.getItem(`listItem${i}`);

            listItemsUL.appendChild(createLIElement(localStorageItemText));
        }
    }
});