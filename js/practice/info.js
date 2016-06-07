'use strict'
	function validateForm() {
		debugger;
    var x = document.forms["myForm"]["fname"].value;
     var y = document.forms["myForm"]["lname"].value;
     var z= document.forms["myForm"]["phone"].value;
    if (x == null || x == "" || y == null || y == " ") {
        alert("Both name must be filled out");
        return false;
    }
    
    if (z.toString().length  !=10){
    	alert("numbers not equal to 10 digit");
    	return false;
    }
}

document.getElementById('submit').addEventListener('click', validateForm);