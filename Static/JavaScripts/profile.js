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