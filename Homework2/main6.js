const bC=document.getElementById("buttonC");

var result=' ';


function functionButtonC(){
    result =' ';
    document.getElementById("output").innerHTML=result;

}

function functionForDisplay(myvalue){
    document.getElementById("output").innerHTML+=myvalue;
}

function functionButtonSolve(){
    var equation=document.getElementById("output").innerHTML;
    var solved= eval(equation);
    document.getElementById("output").innerHTML=solved;
}
