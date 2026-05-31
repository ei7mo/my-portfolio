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

// Animate width of skills section
const skillsContainer = document.getElementById("skills");
window.onscroll = () => {
  if (window.scrollY >= skillsContainer.offsetTop - 500) {
    const skills = document.querySelectorAll(
      "#skills .box .skill-progress span",
    );

    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
};
