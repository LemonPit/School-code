
function showPass(event) {
    
    if (event.target.type == "text") {
        event.target.type = "password";
        event.target.style.backgroundColor = "lightgreen";
    }
    else if (event.target.type == "password") {
        event.target.type = "text";
        event.target.style.backgroundColor = "white";
    }
    
    
}

let input = document.getElementById("passw");
input.addEventListener("click", showPass);

