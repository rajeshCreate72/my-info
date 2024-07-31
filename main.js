const button = document.getElementById("hamburger");
const menu = document.getElementById("nav-list");
const aboutPage = document.getElementById("About");
const projectsPage = document.getElementById("Projects");
const contactPage = document.getElementById("Contact");
const contactLink = document.getElementById("contact-link");
const aboutLink = document.getElementById("home-link");
const projectsLink = document.getElementById("projects-link");

function toggleMenu() {
  menu.style.display = "block";
  menu.classList.add("absolute");
  menu.classList.add("bg-header-color");
}

function handleClickOutside(event) {
  if (!button.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = "none";
    menu.classList.remove("absolute");
    menu.classList.remove("bg-header-color");
    document.removeEventListener("click", handleClickOutside);
  }
}

button.addEventListener("click", () => {
  toggleMenu();
  document.addEventListener("click", handleClickOutside);
});

projectsLink.addEventListener("click", () => {
  aboutPage.classList.add("hidden");
  contactPage.classList.add("hidden");
  projectsPage.classList.remove("hidden");
});

aboutLink.addEventListener("click", () => {
  aboutPage.classList.remove("hidden");
  contactPage.classList.add("hidden");
  projectsPage.classList.add("hidden");
});

contactLink.addEventListener("click", () => {
  aboutPage.classList.add("hidden");
  contactPage.classList.remove("hidden");
  projectsPage.classList.add("hidden");
});
