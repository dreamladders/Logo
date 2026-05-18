// ==============================
// MOBILE MENU
// ==============================

const hamburger =
  document.getElementById("hamburger");

const navbar =
  document.getElementById("navbar");

hamburger.addEventListener("click", () => {

  navbar.classList.toggle("active");

});

// ==============================
// ACTIVE NAV LINK
// ==============================

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if(scrollY >= sectionTop){

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(
      link.href.includes(current)
    ){

      link.classList.add("active");

    }

  });

});

// ==============================
// SCROLL REVEAL
// ==============================

const reveals =
  document.querySelectorAll(".reveal");

function revealSections(){

  reveals.forEach(element => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

// ==============================
// COUNTER
// ==============================

const counters =
  document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target =
      +counter.dataset.target;

    const current =
      +counter.innerText;

    const increment =
      target / 100;

    if(current < target){

      counter.innerText =
        Math.ceil(current + increment);

      setTimeout(updateCounter,20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// ==============================
// DARK MODE
// ==============================

const themeToggle =
  document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});

// ==============================
// BACK TO TOP
// ==============================

const backToTop =
  document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if(scrollY > 400){

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});
