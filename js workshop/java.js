
// // function add(){
// // 	let valadd = (value1)+ (value2);
// // 	alert(valadd);
// // }

// // let hello1 = {
// // 	firstname: "Ramesh",
// // 	lastname: "Tiwari",
// // 	number: "5652",

// // 	fullname(){
// // 		console.log(this.firstname +" "  + this.lastname);
// // 	}
	
// // };

// let value1 = document.forms["myform"]["name"].value;
// if (value1 == ""){
// 	alert("Must be filled");
// 	return false;
// }
document.getElementById("submitBtn").onclick= validateform;
function validateform(){

let value1 = document.getElementById('name').value;
let value2 = document.getElementById('address').value;
let value3 = document.getElementById('number').value;
if('' == value1.trim())
	alert("Name must be filled");

if ('' == value2.trim())
	alert("address must be filled");

if (value3.length != 10 )
	alert('please enter number');
	
debugger
document.getElementById('myform').submit()

}

