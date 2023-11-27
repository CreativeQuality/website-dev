"use strict";

function toggle(name) {
	for (const buttonCell of document.querySelectorAll("span.button-cell")) {
		if (buttonCell.classList.contains(name))
			buttonCell.classList.add("toggled");
		else
			buttonCell.classList.remove("toggled");
	}

	for (const contentDiv of document.querySelectorAll("div.content")) {
		contentDiv.style.display = contentDiv.classList.contains(name) ? "block" : "none";
	}
}

window.onload = () => toggle("about");