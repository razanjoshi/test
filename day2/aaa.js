'use strict'
 function validateForm() {
 	debugger;
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    if (x == null || x == "" && y == null || y =="") {
        alert("Name must be filled out");
        return false;
    }


function isEmpty(str) {
  return str.replace(/^\s+|\s+$/g, '').length == 0;
}
}


