let links = document.querySelectorAll("#header-right a");
let homeLink = document.querySelector("#home-link");
let aboutLink = document.querySelector("#about-link");
let projectsLink = document.querySelector("#projects-link");
let contactLink = document.querySelector("#contact-link");

function scrollIntoSection(sectionId) {
  console.log("sami");

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    console.log(section.getBoundingClientRect());
  }
  return false;
}
