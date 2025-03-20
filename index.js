let allLinks = document.querySelectorAll(".nav-link");
let homeLink = document.querySelector("#home-link");
let aboutLink = document.querySelector("#about-link");
let projectsLink = document.querySelector("#projects-link");
let contactLink = document.querySelector("#contact-link");

let homeSection = document.querySelector("#home-section");
let aboutSection = document.querySelector("#about");
let projectsSection = document.querySelector("#projects-section");
let contactSection = document.querySelector("#contact-section");

function scrollIntoSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  return false;
}

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    designActiveLink();
  });
});

window.addEventListener("scroll", () => {
  designActiveLink();
});

window.addEventListener("load", () => {
  designActiveLink();
});

const designActiveLink = () => {
  homeSection.getBoundingClientRect().top <= 60 &&
  homeSection.getBoundingClientRect().bottom > 50
    ? homeLink.classList.add("active")
    : homeLink.classList.remove("active");

  aboutSection.getBoundingClientRect().top <= 60 &&
  aboutSection.getBoundingClientRect().bottom > 50
    ? aboutLink.classList.add("active")
    : aboutLink.classList.remove("active");

  projectsSection.getBoundingClientRect().top <= 60 &&
  projectsSection.getBoundingClientRect().bottom > 50
    ? projectsLink.classList.add("active")
    : projectsLink.classList.remove("active");

  contactSection.getBoundingClientRect().top <= 60
    ? contactLink.classList.add("active")
    : contactLink.classList.remove("active");
};
