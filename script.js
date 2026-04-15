// Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav ul");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuIcon.innerHTML = "✖"; // Close icon
  } else {
    menuIcon.innerHTML = "☰"; // Hamburger icon
  }
});
