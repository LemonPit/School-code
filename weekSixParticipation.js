function displayHeader() {
	let header = document.getElementById("header1");
	header.className = "show";
}
function hideHeader() {	
	let header = document.getElementById("header1");
	header.className = "hide";
}

let value = document.querySelector("#label1");
value.addEventListener("mouseover", displayHeader);
value.addEventListener("mouseout", hideHeader);
