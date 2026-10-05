const burgerButton = document.getElementById("burgerButton");
const navLinks = document.getElementById("navLinks");

burgerButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});