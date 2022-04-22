var loadFile = function(event) {
    let output = document.querySelector('.pet-img');
    let temp = URL.createObjectURL(event.target.files[0]);

    output.style.backgroundImage = `url(${temp})`;
    
    console.log(temp)
    // output.style.backgroundImage = `url(${URL.createObjectURL(event.target.files[0])})`;
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
};

document.querySelector("#form").addEventListener("submit",(err)=>{

	let name = document.querySelector("#nameInput").value;
    let breed = document.querySelector("#breed").value;
    let address = document.querySelector("#address").value;
    let phone = document.querySelector("#phone").value;

	if(name.trim().length==0 || breed.trim().length==0 || address.trim().length==0)
	{
		alert("Please do not enter blank input");
		err.preventDefault();
		return false;
	}
});
