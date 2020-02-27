/* ***********************************************************
 * Number Sorter
 * Developer: David Gotler 2020   
 * Program Description: Inputs three numbers from the user
 * and sorts them in ascending order then displays the sorted
 * list of numbers
 * ***********************************************************/ 

// Declare variable for html form element
let form = document.getElementById("numSortForm");
// Declare variables for html num elements
let num1 = form.elements["num1"];
let num2 = form.elements["num2"];
let num3 = form.elements["num3"];
// Declare numList variable to store list of the three numbers
let numList;
// Declare output variable to create paragraph element in html
let output = document.getElementById("output");

// sort Function Declaration
function sortList(){
    // Check if inputs are numbers
    if (checkNum()){
        // Call getList to populate numList
        getList();
        // Sort numList and print the sorted list
        numList.sort();
        output.innerHTML = "Your sorted list of numbers is: " + numList[0] + ", " + numList[1] + ", " + numList[2] + ".";
        numSortForm.after(output);
    }
    return false;
}

// checkNum Function Declaration
function checkNum(){
    // Check all three num variables for correct datatype
    if (isNaN(num1.value) || num1.value == ""){
        alert("Please enter a numerical value for Number 1");
        num1.focus();
        return false;
    }
    if (isNaN(num2.value) || num2.value == ""){
        alert("Please enter a numerical value for Number 2");
        num2.focus();
        return false;
    }
    if (isNaN(num3.value) || num3.value == ""){
        alert("Please enter a numerical value for Number 3");
        num3.focus();
        return false;
    }
    else {
        // If all entries are numbers return true
        return true;
    }
}

// getList Function Declaration
function getList(){
    // Init numList with new empty array
    numList = new Array();
    // Populate the array with the three num variables
    numList.push(num1.value);
    numList.push(num2.value);
    numList.push(num3.value);
}

// clearList Function Declaration
function clearList(){
    // Reset the output text
    output.innerHTML = "";
}