"use strict";

function toggle(name) {
	for (const button of document.querySelectorAll("a.button"))
		if (button.id == "button-" + name) button.classList.add("toggled");
		else button.classList.remove("toggled");

	for (const contentDiv of document.querySelectorAll("div.content"))
		contentDiv.style.display = contentDiv.id == "content-" + name ? "block" : "none";
}

function contactMe() {
	let myEmail = document.querySelector("#my-email");
	let mailtoLink = "mailto:" + myEmail.dataset.user + "@" + myEmail.dataset.domain;
	window.location.href = mailtoLink;
}

window.onload = () => toggle("about");