function darkModeToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
