// Scroll per Navbar change
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {

  // scroll kiya to yeh function chale ga
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");i
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth Scroll + Active Link
const navbtns = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll("section");

// Smooth scroll
navbtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });

    Hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// jab bhi user scroll kare — yeh code chale
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute("id");
    }
  });

  navbtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("href") === "#" + current) {
      btn.classList.add("active");
    }
  });
});

// Scroll Animation
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

revealEls.forEach((el) => observer.observe(el));

// Hamburger menu
const Hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
