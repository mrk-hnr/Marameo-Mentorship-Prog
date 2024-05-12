const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const accordComplete = document.querySelectorAll(".accordComplete")
const accordion = document.querySelectorAll(".accordion")
const accordDesc = document.querySelectorAll(".accordDesc")
const accordStatus = document.querySelectorAll("accordStatus")


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



// TOGGLE FUNCTION for ACCORDION
function newToggle() {
  for (let i = 0; accordComplete.length; i++) {
    accordComplete[i].addEventListener("click", toggleActive)
    accordion[i].addEventListener("click", toggleActive)
    accordDesc[i].addEventListener("click", toggleActive)

    
  }
}

function toggleActive() {
  this.classList.toggle("active")
  this.classList.toggle(null)
}


newToggle()

// FONTAWEOME CHANGE FOR ACCORDION
function changeClass(elem) {
  var i = elem.children[1];
  var c = i.classList;

  // Change class
  if (c.contains("fa-minus")) {
      i.classList.remove("fa-minus");
      i.classList.add("fa-plus");
  } else if (c.contains("fa-plus")) {
      i.classList.remove("fa-plus");
      i.classList.add("fa-minus");
  }
}

// accordComplete.addEventListener('click', () => {
//   if (accordComplete.classList.contains("active")) {
//     accordion.classList.toggle("active")
//     accordDesc.classList.toggle("active")
//   } else {
//     accordComplete.classList.add("active")
//   }
// })




// Displays year for Footer
document.querySelector("#year").textContent = new Date().getFullYear();