// ========================================
// MOBILE NAVIGATION
// ========================================

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ========================================
// ACTIVE NAV LINKS
// ========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href").includes(current)
    ) {
      link.classList.add("active");
    }

  });

});

// ========================================
// SCROLL REVEAL
// ========================================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

// ========================================
// COUNTER ANIMATION
// ========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target) {

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// ========================================
// DARK MODE
// ========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const icon = themeToggle.querySelector("i");

  if(document.body.classList.contains("dark-mode")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  } else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

  }

});

// ========================================
// BACK TO TOP
// ========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 400) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// ========================================
// CLOSE MOBILE MENU ON CLICK
// ========================================

navLinks.forEach(link => {

  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

});

// Initial reveal
revealOnScroll();
