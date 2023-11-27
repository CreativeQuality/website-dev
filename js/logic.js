"use strict";

function toggle(name) {
	for (const buttonCell of $("span.button-cell")) {
		if (buttonCell.classList.contains(name))
			buttonCell.classList.add("toggled");
		else
			buttonCell.classList.remove("toggled");
	}

	for (const contentDiv of $("div.content")) {
		let displayStyle = contentDiv.classList.contains(name) ? "block" : "none";
		contentDiv.style.display = displayStyle;
	}
}

/**
 * Below helper functions are from https://plainjs.com/
 */

// select a list of matching elements, context is optional
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}

// select the first match only, context is optional
function $1(selector, context) {
    return (context || document).querySelector(selector);
}

window.onload = () => toggle("about");