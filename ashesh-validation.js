'user strict';
/*let val1 = document.getElementById('fname');
let val2 = document.getElementById('lname');
let val3 = document.getElementById('no');*/
let btn = document.getElementById('submit');

btn.onclick = function valid(){
	let val1 = document.getElementById('fname').value;
let val2 = document.getElementById('lname').value;
let val3 = document.getElementById('no').value;
let max =10;
if(val1 == null || val1 == ""){
	alert("Invalid first name");

}

else if(val2 == null || val2 == "")
	alert("Invalid last name");




else if (val3.length != max || val3 == "" || val3 == null)
{
	//debugger
	alert("Invalid phone number");
}
else
	alert("Success");


}