'use strict';

let addBtn = document.getElementById('add');
addBtn.onclick = function() {
	let valA = document.getElementById('fno').value;
	let valB = document.getElementById('sno').value;
	alert(parseInt(valA)+parseInt(valB));
}