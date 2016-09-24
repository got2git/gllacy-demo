var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".feedback-popup");
var close = popup.querySelector(".feedback-form-close");
var username = popup.querySelector("[name='username']");
var mail = popup.querySelector("[name='email']");
var message = popup.querySelector("[name='comment']");
var form = popup.querySelector("form");
var overlay = document.querySelector(".feedback-form-overlay");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-popup-show");
    username.focus();
    overlay.classList.add("feedback-form-overlay-show");
    username.classList.remove("feedback-popup-error");
    mail.classList.remove("feedback-popup-error");
    message.classList.remove("feedback-popup-error");
})

form.addEventListener("submit", function(event) {
    if (!username.value || !mail.value || !message.value) {
        event.preventDefault();
        username.classList.remove("feedback-popup-error");
        mail.classList.remove("feedback-popup-error");
        message.classList.remove("feedback-popup-error");
        popup.offsetWidth = popup.offsetWidth;
        username.classList.add("feedback-popup-error");
        mail.classList.add("feedback-popup-error");
        message.classList.add("feedback-popup-error");
    }
})

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-popup-show");
    overlay.classList.remove("feedback-form-overlay-show");
})

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-popup-show")) {
            popup.classList.remove("feedback-popup-show");
            overlay.classList.remove("feedback-form-overlay-show");
        }
    }
})

overlay.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-popup-show");
    overlay.classList.remove("feedback-form-overlay-show");
})