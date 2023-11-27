"use strict";

function toggle(name) {
	let buttonCells = document.querySelectorAll("span.button-cell");
	for (const buttonCell of buttonCells) {
		if (buttonCell.classList.contains(name))
			buttonCell.classList.add("toggled");
		else
			buttonCell.classList.remove("toggled");
	}

	let contentDivs = document.querySelectorAll("div.content");
	for (const contentDiv of contentDivs) {
		let displayStyle = contentDiv.classList.contains(name) ? "block" : "none";
		contentDiv.style.display = displayStyle;
	}
}

window.onload = () => toggle("about");