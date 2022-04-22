 

function getFocus() {
   var getId = document.getElementById("s-name");
   
   if(getId.style.color != "white"){
   document.getElementById("l-name").style.visibility = "hidden";
   getId.style.background = " #1abc9c";
   getId.style.color = " white";
  //  document.getElementById('name').style.border = "2px solid red";
}
}
function getBlur(element) {
  var getId = document.getElementById("s-name");
   if (getId.style.color == "white" &&  element.value == "") {
      document.getElementById("l-name").style.visibility = "visible";
      getId.style.color = " transparent";
      getId.style.background = ""
      // document.getElementById('name').style.border = "2px solid #fafafa";
    }

}
function getFocus1() {
   var getId = document.getElementById("s-phone");
   
   if(getId.style.color != "white"){
   document.getElementById("l-phone").style.visibility = "hidden";
   getId.style.background = " #1abc9c";
   getId.style.color = " white";
}
}
function getBlur1 (element) {
  var getId = document.getElementById("s-phone");
    if (getId.style.color == "white" &&  element.value == "") { 
      document.getElementById("l-phone").style.visibility = "visible";
      getId.style.color = " transparent";
      getId.style.background = ""
    }

}
function getFocus2() {
   var getId = document.getElementById("s-email");
   
   if(getId.style.color != "white"){
   document.getElementById("l-email").style.visibility = "hidden";
   getId.style.background = " #1abc9c";
   getId.style.color = " white";
}
}
function getBlur2 (element) {
  var getId = document.getElementById("s-email");
  if (getId.style.color == "white" &&  element.value == ""){
      document.getElementById("l-email").style.visibility = "visible";
      getId.style.color = " transparent";
      getId.style.background = ""
    }

}
function getFocus3() {
   var getId = document.getElementById("s-message");
   
   if(getId.style.color != "white" ){
   document.getElementById("l-message").style.visibility = "hidden";
   getId.style.background = " #1abc9c";
   getId.style.color = " white";
}
}
function getBlur3 (element) {
  var getId = document.getElementById("s-message");
  if (getId.style.color == "white" &&  element.value == "") {
      document.getElementById("l-message").style.visibility = "visible";
      getId.style.color = " transparent";
      getId.style.background = ""
    }

}

document.querySelector("#form1").addEventListener('submit',(err)=>{
  naam = document.getElementById('name').value;
  email = document.getElementById('email').value;
  phone = document.getElementById('phone').value;
  message = document.getElementById('message').value;
  sname = document.getElementById('s-name');
  semail = document.getElementById('s-email');
  sphone = document.getElementById('s-phone');

  let n = 0;
  let e = 0;
  let p = 0;
  let m = 0;


  if ( naam.length > 21 || naam.length <= 2 )
  {
    err.preventDefault();
    sname.innerHTML = "Username should be between 3 to 21";
    sname.style.color = "red";
    document.getElementById('name').style.border = "2px solid red";
    n++;
  }
  if ( !isNaN(naam.charAt(0)) ) 
  {
    err.preventDefault();
    sname.innerHTML = "Username shouldn't be start with number";
    document.getElementById('name').style.border = "2px solid red";
    sname.style.color = "red";
    n++;
  }
  for (  i = 0; i < naam.length; i++) 
  {  
    var upper = !(65 <= naam.charCodeAt (i) &&  naam.charCodeAt(i) <= 90);
    var lower = !(97 <= naam.charCodeAt (i) &&  naam.charCodeAt(i) <= 122);
    var num = !(48 <= naam.charCodeAt (i) &&  naam.charCodeAt(i) <= 57);
    if ( upper  && lower && num)
    {
      err.preventDefault();
      document.getElementById('name').style.border = "2px solid red";
      sname.innerHTML = "Username shouldn't contain special character";
      sname.style.color = "red"; 
      n++;
    } 
  }
  if ( !(email.includes('.'))) 
    {
      err.preventDefault();
      semail.innerHTML = "Email don't have dot character ";
      semail.style.color = "red";
      document.getElementById('email').style.border = "2px solid red";
      e++;

    }
   var check4 = email.indexOf('.') == (email.length - 4);
   var check3 = email.indexOf('.') == (email.length - 3);
  if ( email.indexOf('@') <= email.indexOf('.') && !check4 && !check3 )
  {  
    
      err.preventDefault();
      semail.innerHTML = "Email: '.' is used in wrong position";
      semail.style.color = "red";
      document.getElementById('email').style.border = "2px solid red"; 
      e++;  

  }
  
  if ( phone.length != 10 )
  {
    err.preventDefault();
    sphone.innerHTML = "phone numbers is less than 10";
    sphone.style.color = "red";
    document.getElementById('phone').style.border = "2px solid red";
    p++;

  }
  if (n == 0) 
  {
    sname.innerHTML = "Username";
    sname.style.color = "white";
    document.getElementById('name').style.border = "2px solid #fafafa";
  }

  if (e == 0)
  {
    semail.innerHTML = "Email";
    semail.style.color = "white";
    document.getElementById('email').style.border = "2px solid #fafafa";
  }

  if(p == 0)
  {
    sphone.innerHTML = "Phone";
    sphone.style.color = "white";
    document.getElementById('phone').style.border = "2px solid #fafafa";
  }
});







