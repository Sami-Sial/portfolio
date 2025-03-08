let links = document.querySelectorAll("#header-right a");
let homeLink = document.querySelector("#home-link");
let aboutLink = document.querySelector("#about-link");
let projectsLink = document.querySelector("#projects-link");
let contactLink = document.querySelector("#contact-link");
let aboutBtn = document.querySelector("#about-heading");

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  for (link of links) {
    link.classList.remove("active-nav-link");
  }
  e.target.classList.add("active-nav-link");
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  for (link of links) {
    link.classList.remove("active-nav-link");
  }
  e.target.classList.add("active-nav-link");
  scrollTo({
    top: 530,
    behavior: "smooth",
  });
});

projectsLink.addEventListener("click", (e) => {
  e.preventDefault();
  for (link of links) {
    link.classList.remove("active-nav-link");
  }
  e.target.classList.add("active-nav-link");
  scrollTo({
    top: 1115,
    behavior: "smooth",
  });
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  for (link of links) {
    link.classList.remove("active-nav-link");
  }
  e.target.classList.add("active-nav-link");
  scrollTo({
    top: 2330,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (pageYOffset < 180) {
    for (link of links) {
      link.classList.remove("active-nav-link");
    }
    homeLink.classList.add("active-nav-link");
  } else if (pageYOffset > 180 && pageYOffset < 700) {
    for (link of links) {
      link.classList.remove("active-nav-link");
    }
    aboutLink.classList.add("active-nav-link");
  } else if (pageYOffset > 700 && pageYOffset < 1580) {
    for (link of links) {
      link.classList.remove("active-nav-link");
    }
    projectsLink.classList.add("active-nav-link");
  } else if (pageYOffset > 1580) {
    for (link of links) {
      link.classList.remove("active-nav-link");
    }
    contactLink.classList.add("active-nav-link");
  }
  // if(pageYOffset > ) 180 750 1580
});

window.addEventListener("load", () => {
  for (link of links) {
    link.classList.remove("active-nav-link");
  }
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
  homeLink.classList.add("active-nav-link");
});

aboutBtn.addEventListener("click", () => {
  for (link of links) {
    link.classList.remove("active-nav-link");
  }
  aboutLink.classList.add("active-nav-link");
  scrollTo({
    top: 530,
    behavior: "smooth",
  });
});
