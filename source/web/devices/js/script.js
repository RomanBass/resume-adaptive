//dialog popup

let feedbackLink = document.querySelector(".write-us");
let feedbackPopup = document.querySelector(".feedback");
let feedbackClose = document.querySelector(".button-close");

feedbackLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("feedback-show");
	feedbackName.value = storageName;
	feedbackEmail.value = storageEmail;
});

feedbackClose.addEventListener("click", function (evt) {
	feedbackPopup.classList.remove("feedback-show");
	feedbackPopup.classList.remove("feedback-error");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
	if (feedbackPopup.classList.contains("feedback-show")) {
		evt.preventDefault();
		feedbackPopup.classList.remove("feedback-show");
		feedbackPopup.classList.remove("feedback-error");
		}
	}
});

//dialog popup check, if the inputs are incorrect

let sendForm = document.querySelector(".button-send-form");
let feedbackInputs = document.querySelectorAll(".feedback-input");
let isValid;
sendForm.addEventListener("click", function (evt) {
	for (let feedbackInput of feedbackInputs) {
		isValid = feedbackInput.validity;
		if (isValid.valueMissing || isValid.patternMismatch) {
		feedbackPopup.classList.remove("feedback-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("feedback-error");
		console.log("no");
		break;
		}
	}
});

//dialog popup, put name and email into localStorage

let feedbackName = document.querySelector(".feedback-name");
let feedbackEmail = document.querySelector(".feedback-email");
feedbackPopup.addEventListener("submit", function () {
	localStorage.setItem("name", feedbackName.value);
	localStorage.setItem("email", feedbackEmail.value);
});

let storageName = localStorage.getItem("name");
let storageEmail = localStorage.getItem("email");

//map popup

let smallMap = document.querySelector(".small-map");
let bigMap = document.querySelector(".big-map");
let mapClose = document.querySelector(".button-close-big-map");

smallMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	bigMap.classList.add("big-map-show");
});

mapClose.addEventListener("click", function (evt) {
	bigMap.classList.remove("big-map-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (bigMap.classList.contains("big-map-show")) {
			evt.preventDefault();
			bigMap.classList.remove("big-map-show");
		}
	}
});





