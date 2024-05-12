const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// Displays year for Footer
document.querySelector("#year").textContent = new Date().getFullYear();

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".rightNav");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }))

// window.addEventListener('resize', e => {
//     if (window.matchMedia(`(min-width: 750px)`).matches) {
//         navMenu.classList.remove('active');
//         hamburger.classList.remove('active');
//     }
//  });