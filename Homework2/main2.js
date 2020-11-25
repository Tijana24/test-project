//HTML elememts that we are going to work with. We are going to select them
 const statusDiv= document.querySelector('.status');
 const resetDiv= document.querySelector('.reset');
 const cellDivs= document.querySelectorAll('.game-cell');

//game constants
const xSymbol='x';
const oSymbol='o';

//game variables
let gameIsGoing=true;
let xIsNext= true;
let winner= null;

//function

const letterToSymbol= (letter) => letter ==='x' ? xSymbol: oSymbol;

const checkGameStatus=() => {
    const topLeft=cellDivs[0].classList[1];
    const topMiddle=cellDivs[1].classList[1];
    const topRight=cellDivs[2].classList[1];
    const middleLeft=cellDivs[3].classList[1];
    const middleMiddle=cellDivs[4].classList[1];
    const middleRight=cellDivs[5].classList[1];
    const bottomLeft=cellDivs[6].classList[1];
    const bottomMiddle=cellDivs[7].classList[1];
    const bottomRight=cellDivs[8].classList[1];

    // Have we winner?
    if(topLeft && topLeft == topMiddle && topLeft === topRight){
        gameIsGoing=false;
        winner=topLeft;
        statusDiv.innerHTML = `${letterToSymbol(topLeft)} is winner!`;
    }
    else if(middleLeft && middleLeft == middleMiddle && middleLeft===middleRight){
        gameIsGoing=false;
        winner=middleLeft;
        statusDiv.innerHTML = `${letterToSymbol(middleLeft)} is winner!`;

    }
    else if(bottomLeft&& bottomLeft == bottomMiddle && bottomLeft===bottomRight){
        gameIsGoing=false;
        winner=bottomLeft;
        statusDiv.innerHTML = `${letterToSymbol(bottomLeft)} is winner!`;
    }
    else if(topLeft && topLeft===middleLeft && topLeft===bottomLeft){
        gameIsGoing=false;
        winner=topLeft;
        statusDiv.innerHTML = `${letterToSymbol(topLeft)} is winner!`;
    }
    else if(topMiddle && topMiddle===middleMiddle && topMiddle===bottomMiddle){
        gameIsGoing=false;
        winner=topMiddle;
        statusDiv.innerHTML = `${letterToSymbol(topMiddle)} is winner!`;
    }
    else if(topRight && topRight===middleRight && topRight===bottomRight){
        gameIsGoing=false;
        winner=topRight;
        statusDiv.innerHTML = `${letterToSymbol(topRight)} is winner!`;
    }
    else if(topLeft && topLeft===middleMiddle && topLeft===bottomRight){
        gameIsGoing=false;
        winner=topLeft;
        statusDiv.innerHTML = `${letterToSymbol(topLeft)} is winner!`;
    }
    else if(topRight && topRight===middleMiddle && topRight===bottomLeft){
        gameIsGoing=false;
        winner=topRight;
        statusDiv.innerHTML = `${letterToSymbol(topRight)} is winner!`;
    }
    else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight){
        gameIsGoing=false;
        statusDiv.innerHTML='Game is over!';
    }
    else{
        xIsNext= !xIsNext;
        if (xIsNext){
            statusDiv.innerHTML= `${xSymbol} is next`;}
            else {
                statusDiv.innerHTML=`${oSymbol} is next`;
            }
        }
};


//Event handlers
const handleReset =(e) =>{
    xIsNext = true;
    statusDiv.innerHTML=`${xSymbol} is next`;
    for(const cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }       
}
const handleCellClick =(e) =>{
    const classList=e.target.classList;

    if(!gameIsGoing || classList[1]==='x' || classList[1]==='o'){
        return;
    }
    
    if (xIsNext){
        classList.add('x');
        checkGameStatus();
       
    }
    else{
        classList.add('o');
        checkGameStatus();
     
    }


}


//Event listeners
resetDiv.addEventListener('click',handleReset);
for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClick);

}