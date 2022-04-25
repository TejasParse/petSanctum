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

function password_show_hide() {
    let x = document.getElementById("password");
    let show_eye = document.getElementById("show_eye");
    let hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
}
