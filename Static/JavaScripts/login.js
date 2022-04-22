
function getFocus(element) {
    var getId = document.getElementById("s-name");
    var label = document.getElementById("l-name")
    if(getId.style.color != "rgb(99, 99, 182)"){
    label.style.visibility = "hidden";
    getId.style.background = "white";
    getId.style.color = " rgb(99, 99, 182)";
    element.style.border = "2px solid rgba(106, 18, 156,1)";
 }
 }
 function getBlur(element) {
   var getId = document.getElementById("s-name");
    if (getId.style.color == "rgb(99, 99, 182)" &&  element.value == "") {
       document.getElementById("l-name").style.visibility = "visible";
       getId.style.color = "transparent";
       getId.style.background = "transparent";
       element.style.border = "2px solid rgba(106, 18, 156,0.5)";
     }
 
 }
 
 function getFocus1(element) {
    var getId = document.getElementById("s-pwd");
    var label = document.getElementById("l-pwd")
    if(getId.style.color != "rgb(99, 99, 182)"){
    label.style.visibility = "hidden";
    getId.style.background = "white";
    getId.style.color = " rgb(99, 99, 182)";
    element.style.border = "2px solid rgba(106, 18, 156,1)";
 }
 }
 function getBlur1(element) {
   var getId = document.getElementById("s-pwd");
    if (getId.style.color == "rgb(99, 99, 182)" &&  element.value == "") {
       document.getElementById("l-pwd").style.visibility = "visible";
       getId.style.color = "transparent";
       getId.style.background = "transparent";
       element.style.border = "2px solid rgba(106, 18, 156,0.5)";
     }
 
 }

 function show(element) {
     
    
        element.style.visibility = "collapse"
        document.getElementById('o-eye').style.visibility = "visible"
        document.getElementById('pwd').type = "text"
        
 }
 function show1(element) {
     
    
    element.style.visibility = "collapse"
    document.getElementById('c-eye').style.visibility = "visible"
    document.getElementById('pwd').type = "password"
    
}
 