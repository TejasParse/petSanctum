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

	let name = document.querySelector("#petName").value;
	let breed = document.querySelector("#breed").value;
	
	if(name.trim().length==0 || breed.trim().length==0)
	{
		err.preventDefault();
		alert("Please do not enter blank input");
	}



});