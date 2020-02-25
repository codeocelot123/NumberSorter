let num1 = form.elements["num1"];
let num2 = form.elements["num2"];
let num3 = form.elements["num3"];
let numList;
let form = document.getElementById("numSortForm");
let output = document.getElementById("output");


function sort(){
    if (checkNum()){
        getList();
        numList.sort();
        output.innerHTML = "Your sorted list of numbers is: " + numList[0] + ", " + numList[1] + ", " + numList[2] + ".";
    }
    else{
        alert("An error has occurred. Please re-enter three (3) numbers.");
        num1.focus();
    }
}

function checkNum(){
    if (isNaN(num1.value)){
        alert("Please enter a numerical value for Number 1");
        num1.focus();
        return false;
    }
    if (isNaN(num2.value)){
        alert("Please enter a numerical value for Number 2");
        num2.focus();
        return false;
    }
    if (isNaN(num3.value)){
        alert("Please enter a numerical value for Number 3");
        num3.focus();
        return false;
    }
    else {
    return true;
    }
}

function getList(){
    numList = new Array();
    numList.push(num1.value);
    numList.push(num2.value);
    numList.push(num3.value);
}
