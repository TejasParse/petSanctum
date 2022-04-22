const hamburger = document.querySelector(".hamburger");
const linksCenter = document.querySelector("#linksCenter");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    linksCenter.classList.toggle("active");
});