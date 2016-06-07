function validation(){
	//debugger;
 var fn = document.getElementById("fn").value;
 var ln = document.getElementById("ln").value;
 var num = document.getElementById("num").value;

 if( fn.trim() == "" || ln.trim() =="" || num.trim() == ""){
 	 document.getElementById("demo").innerHTML = "Field shouldnot be empty";
 }

 else if ( num.length != 10){
 	 document.getElementById("demo").innerHTML = 
 	 "is it phone number or ur age?";
 }
else{
  document.getElementById("demo").innerHTML = "Good";
}
}