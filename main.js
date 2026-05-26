// Control the menu
const menuBtn = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
const closeMenuBtn = document.getElementById("close-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.remove("active");
});
