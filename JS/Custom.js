function toggleWhiteMode() {
  var body = document.body;
  body.classList.toggle("whiteMode");

  if (document.body.classList.contains("whiteMode")) {
    // ICONS
    var modeSun = document.getElementById("sun");
    modeSun.classList.add("hidden");

    var modeMoon = document.getElementById("moon");
    modeMoon.classList.remove("hidden");

    // NAV COLOR
    var whiteNav = document.getElementById("mainNav");
    whiteNav.classList.add("bg-light");
    whiteNav.classList.remove("darkNav");

    // BUTTON COLOR
    var whiteBtn = document.getElementById("btn");
    whiteBtn.classList.add("btn-outline-dark");
    whiteBtn.classList.remove("btn-outline-light");
  } else {
    // ICONS
    var modeSun = document.getElementById("sun");
    modeSun.classList.remove("hidden");

    var modeMoon = document.getElementById("moon");
    modeMoon.classList.add("hidden");

    // NAV COLOR
    var whiteNav = document.getElementById("mainNav");
    whiteNav.classList.add("darkNav");
    whiteNav.classList.remove("bg-light");

    // BUTTON COLOR
    var whiteBtn = document.getElementById("btn");
    whiteBtn.classList.add("btn-outline-light");
    whiteBtn.classList.remove("btn-outline-dark");
  }
}

// TABS

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// GSAP ANIMATIONS
gsap.defaults({ease: "none", duration: 2});

let scrollTl = gsap.timeline();

scrollTl.to(".section1", {
    // xPercent: -100,
    opacity: 0
}).to(".section2", {
    // xPercent: -100,
    opacity: 0
}).to(".section3", {
    // xPercent: -100,
    opacity: 0
});

ScrollTrigger.create({
    animation: scrollTl,
    trigger: ".main",
    start: "top top",
    end: "+=4000", 
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true
  });

// GSDevTools.create();to
