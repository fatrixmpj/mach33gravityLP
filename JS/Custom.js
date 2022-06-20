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

// *******************
// * GSAP ANIMATIONS *
// *******************

// ScrollTrigger
gsap.defaults({ ease: "none", duration: 1 });

let scrollTl = gsap.timeline();

scrollTl
  .to(".scroll-down", {
    // opacity: 0
    yPercent: -1500,
  })
  .from(
    ".section1",
    {
      opacity: 0,
    },
    "<"
  )

  .from(".section1", { duration: 2 })

  .from(".section1", {
    opacity: 1,
  })
  .from(".section2", {
    opacity: 0,
  })

  .from(".section1", { duration: 2 })

  .from(".section2", {
    opacity: 1,
  })
  .from(".section3", {
    opacity: 0,
  })

  .from(".section1", { duration: 2 });

ScrollTrigger.create({
  animation: scrollTl,
  trigger: ".main",
  start: "top top",
  end: "+=10000",
  scrub: true,
  pin: ".main",
  anticipatePin: 1,
  markers: true,
});


// Arrow Bounce
let arrowTl = gsap.timeline({
    repeat: -1
});

arrowTl.to(".arrow", {
    yPercent: -10
}).to(".arrow", {
    yPercent: 10
}).repeat()

// GSDevTools.create();to
