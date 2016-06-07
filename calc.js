
function validateForm() {
debugger
    let fn = document.getElementById("a").value;
    let ln = document.getElementById("b").value;
    let pn = document.getElementById("phone").value;
    if ('' == fn.trim()) 
        alert('first name cant be null');
    if ('' == ln.trim()) 
        alert('last name cant be null');
    if (pn.length != 10) 
        alert('number must be 10 digit');
        document.getElementById('top').submit()
        


    };


