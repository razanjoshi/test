'use strict'

let bibhuti = {
	firstName: 'bibhuti',
	lastName: 'Regmi',
	fullName(){
		return this.firstName + this.lastName;
			}
};

let someone = Object.create(bibhuti);
someone.firstName = "ABC";
someone.lastName = "XYZ";

someone.fullName();
someone.firstName;
someone['first Name']

class Person(){
	constructor(firstname, lastName){
		this.firstName = firstname;
		this.lastName = lastName;
		}
	fullName(){
		return this.firstName + this.lastName;
	}
}
class Hero extends Person{
	constructor(firstname, lastName, power){
		super(firstname, lastName);
		this.power = power;
	}
}

var ptags = document.getElementsByTagName('p');

var warnings = document.getElementsByClassName('warnings');

<div class = "hello">
	<p> Hello </p>
	<p> Hello </p>
</div>

.hello p{}


let hello = {
	"firstName" : 'bibhuti'
	"fullName" : function(){

	};
}

//ajax = get,post,put, delete
$1.ajax({
	method: 'GET',
	url: 'some url',
	data: {},
	type: 'json',
	success: function(){

	},
	error(){

	}
});
})
var ps = document.querySelectorAll('.hello p');