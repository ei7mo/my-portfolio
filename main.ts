// Control the menu
const menuBtn = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
const closeMenuBtn = document.getElementById("close-menu");

menuBtn?.addEventListener("click", () => {
  menu?.classList.remove("right-[-51vw]");
  menu?.classList.add("right-0");
});

closeMenuBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  menu?.classList.remove("right-0");
  menu?.classList.add("right-[-51vw]");
});
