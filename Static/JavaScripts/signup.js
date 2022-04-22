function ceye(element){
    element.style.display = "none";
    element.style.visibility = "collapse";
    document.getElementById('o-eye').style.display = "block";
    document.getElementById('o-eye').style.visibility = "visible";
    document.getElementById('pwd').type = "text";

}
function oeye(element){
    element.style.display = "none";
    element.style.visibility = "collapse";
    document.getElementById('c-eye').style.display = "block";
    document.getElementById('c-eye').style.visibility = "visible";
    document.getElementById('pwd').type = "password";
}


document.querySelector("#form3").addEventListener('submit',(err)=>{
  let f = 0;
  let l = 0;
  let p = 0;
  let e = 0;
  let a = 0;
  let s = 0;
  let c = 0;
  let pw = 0;
  let cpw = 0;
  let z = 0;
  let u = 0;

  naam = document.getElementById('name').value;
  
  for (  i = 0; i < naam.length; i++) 
  {  
    var upper = !(65 <= naam.trim().charCodeAt (i) &&  naam.trim().charCodeAt(i) <= 90);
    var lower = !(97 <= naam.trim().charCodeAt (i) &&  naam.trim().charCodeAt(i) <= 122);
    var space = !(32 == naam.charCodeAt(i));
    if ( upper  && lower && space)
    {
      err.preventDefault();
      sname.innerHTML = "Firstname shouldn't contain special character & number";
      document.getElementById('cname').style.border = "5px solid red";
      f++;
    } 
  }
  if ( naam.trim().length > 21 || naam.trim().length <= 2 )
  {
    err.preventDefault();
    sname.innerHTML = "Firstname should be between 3 to 21";
    document.getElementById('cname').style.border = "5px solid red";
    f++;
  }
  if ( naam.trim() == "" ) 
  {
    err.preventDefault();
    sname.innerHTML = "Only space is not allowed.";
    document.getElementById('cname').style.border = "5px solid red";
    f++;
  }


  title = document.getElementById('title').value;

  for (  i = 0; i < title.length; i++) 
  {  
    var upper = !(65 <= title.trim().charCodeAt (i) &&  title.trim().charCodeAt(i) <= 90);
    var lower = !(97 <= title.trim().charCodeAt (i) &&  title.trim().charCodeAt(i) <= 122);
    var space = !(32 == title.charCodeAt(i));
    if ( upper  && lower && space)
    {
      err.preventDefault();
      stitle.innerHTML = "Lastname shouldn't contain special character & number";
      document.getElementById('ctitle').style.border = "5px solid red";
      l++;
    } 
  }
  if ( title.trim().length > 31 || title.trim().length < 2 )
  {
    err.preventDefault();
    stitle.innerHTML = "Lastname should be between 2 to 31";
    document.getElementById('ctitle').style.border = "5px solid red";
    l++;
  }
  if ( title.trim() == "" ) 
  {
    err.preventDefault();
    stitle.innerHTML = "Only space is not allowed.";
    document.getElementById('ctitle').style.border = "5px solid red";
    l++;
  }

  phone = document.getElementById('phone').value;  
  if ( phone.length != 10 )
  {
    err.preventDefault();
    sphone.innerHTML = "Phone number should be of 10 digit.";
    
    document.getElementById('cphone').style.border = "5px solid red";
    p++;

  }
  
  email = document.getElementById('email').value;  

  
  if ( !(email.includes('.'))) 
    {
      err.preventDefault();
      semail.innerHTML = "Email don't have dot character ";
    
      document.getElementById('cemail').style.border = "5px solid red";
      e++;

    }
   var check4 = email.indexOf('.') == (email.length - 4);
   var check3 = email.indexOf('.') == (email.length - 3);
  if ( email.indexOf('@') <= email.indexOf('.') && !check4 && !check3 )
  {  
    
      err.preventDefault();
      semail.innerHTML = "Email: '.' is used in wrong position";
      semail.style.color = "red";
      document.getElementById('cemail').style.border = "5px solid red";   
      e++;
  }
  if (email.trim() == "")
  {
    err.preventDefault();
    semail.innerHTML = "Only space is not allowed ";
    
    document.getElementById('cemail').style.border = "5px solid red";
    e++;
  }
  uname = document.getElementById('uname').value;  

  if ( uname.length > 21 || uname.length <= 2 )
  {
    err.preventDefault();
    suname.innerHTML = "Username should be between 3 to 21";
    
    document.getElementById('cuname').style.border = "5px solid red";
    u++;

  }
  if ( !isNaN(uname.charAt(0)) ) 
  {
    err.preventDefault();
    suname.innerHTML = "Username shouldn't be start with number";
    document.getElementById('cuname').style.border = "5px solid red";
    u++;
  }
  for (  i = 0; i < uname.length; i++) 
  {  
    var upper = !(65 <= uname.charCodeAt (i) &&  uname.charCodeAt(i) <= 90);
    var lower = !(97 <= uname.charCodeAt (i) &&  uname.charCodeAt(i) <= 122);
    var num = !(48 <= uname.charCodeAt (i) &&  uname.charCodeAt(i) <= 57);
    if ( upper  && lower && num)
    {
      err.preventDefault();
      suname.innerHTML = "Username shouldn't contain special character";
      document.getElementById('cuname').style.border = "5px solid red";
      u++;
    } 
  }
  if (uname.trim() == "")
  {
    err.preventDefault();
    suname.innerHTML = "Only space is not allowed ";
    
    document.getElementById('cuname').style.border = "5px solid red";
    u++;
  }
  address = document.getElementById('address').value;
  if (address.trim() == "")
  {
    err.preventDefault();
    saddress.innerHTML = "Only space is not allowed ";
    
    document.getElementById('caddress').style.border = "5px solid red";
    a++;
  }
  state = document.getElementById('state').value;
  if (state.trim() == "")
  {
    err.preventDefault();
    sstate.innerHTML = "Only space is not allowed ";
    
    document.getElementById('cstate').style.border = "5px solid red";
    s++;
  }
  zip = document.getElementById('zip').value;  
  if ( zip.length != 6 )
  {
    err.preventDefault();
    szip.innerHTML = "Phone number should be of 10 digit.";
    
    document.getElementById('czip').style.border = "5px solid red";
    z++;

  }
  city = document.getElementById('city').value;
  if (city.trim() == "")
  {
    err.preventDefault();
    scity.innerHTML = "Only space is not allowed ";
    
    document.getElementById('ccity').style.border = "5px solid red";
    c++;
  }
  pwd = document.getElementById('pwd').value;

  if ( pwd.length < 9 )
  {
    err.preventDefault();
    spwd.innerHTML = "Password should of atleast 8 digit.";
    document.getElementById('capwd').style.border = "5px solid red";
    pw++;

  }
  cpwd = document.getElementById('cpwd').value;

  if ( cpwd != pwd  )
  {
    err.preventDefault();
    scpwd.innerHTML = "Reconfirm your password.";
    document.getElementById('ccpwd').style.border = "5px solid red";
    cpw++;

  }
  if (f == 0)
  {
    sname.innerHTML = "";
    document.getElementById('cname').style.border = "";
  }
  if (l == 0)
  {
    stitle.innerHTML = "";
    document.getElementById('ctitle').style.border = "";
  }
  if (e == 0)
  {
    semail.innerHTML = "";
    document.getElementById('cemail').style.border = "";
  }
  if (p == 0)
  {
    sphone.innerHTML = "";
    document.getElementById('cphone').style.border = "";
  }
  if (a == 0)
  {
    saddress.innerHTML = "";
    document.getElementById('caddress').style.border = "";
  }
  if (c == 0)
  {
    scity.innerHTML = "";
    document.getElementById('ccity').style.border = "";
  }
  if (s == 0)
  {
    sstate.innerHTML = "";
    document.getElementById('cstate').style.border = "";
  }
  if (u == 0)
  {
    suname.innerHTML = "";
    document.getElementById('cuname').style.border = "";
  }
  if (pw == 0)
  {
    spwd.innerHTML = "";
    document.getElementById('capwd').style.border = "";
  }
  if (cpw == 0)
  {
    scpwd.innerHTML = "";
    document.getElementById('ccpwd').style.border = "";
  }
  if (z == 0)
  {
    szip.innerHTML = "";
    document.getElementById('czip').style.border = "";
  }

  
});