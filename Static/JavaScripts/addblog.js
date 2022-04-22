var loadFile = function(event) {
    
    var output = document.getElementById('profile');
    let temp = URL.createObjectURL(event.target.files[0]);
    output.src = temp;
    console.log(temp)
    // output.style.backgroundImage = `url(${URL.createObjectURL(event.target.files[0])})`;
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
};


document.querySelector("#form").addEventListener("submit",(err)=>{

	let title = document.querySelector("#title").value;
	let description = document.querySelector("#description").value;

	if(title.trim().length==0 || description.trim().length==0)
	{
		err.preventDefault();
		alert("Please do not enter blank inputs");
	}

});