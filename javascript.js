var displayVal = "";

function displaynumber(d) {
    displayVal = displayVal + d;
    $("#result").val(displayVal);
}

function calculate(){
    $("#result").val(eval(displayVal));
    //eval evaluates the javascript expression, javascript preforms operations for you
    // $(#result) puts the number in the input box, corresponds to the input id #result
    //.val gets the value of the displayVal and outputs it to the input box
}

function clearnumber() {
    displayVal = "";
    $("#result").val(displayVal);
    //set displayVal to an empty string and disply it to the input box
}

function square() {
    displayVal = eval(displayVal + "*" + displayVal);
    $("#result").val(displayVal);
    //concatenate the displayVal with the multiplcation operation to get a number times itself
}

function reciporical() {
    displayVal = eval(1/displayVal);
    $("#result").val(displayVal);
}











