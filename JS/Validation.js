'use strict';

function validate(){
	let fName = document.getElementById('first').value;
	let lName = document.getElementById('last').value;
	let pNo = document.getElementById('phone').value;
	if('' == fName.trim())
		alert('fName cannot be null');
	if('' == lName.trim())
		alert('lName cannot be null');
	if(pNo != /^[0-9]+$/)
		alert('pNo should be numbers');
	if(pNo.length != 10)
		alert('pNo should be 10 digits');
};
document.getElementById('submitform').onclick=validate;