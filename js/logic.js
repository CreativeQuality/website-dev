"use strict";

function toggle(name) {
	for (const button of document.querySelectorAll("span.button"))
		if (button.id == "button-" + name) button.classList.add("toggled");
		else button.classList.remove("toggled");

	for (const contentDiv of document.querySelectorAll("div.content"))
		contentDiv.style.display = contentDiv.id == "content-" + name ? "block" : "none";
}

window.onload = () => toggle("about");