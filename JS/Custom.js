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
    whiteNav.classList.add("lightNav");
    whiteNav.classList.remove("darkNav");
    // NAVbrand COLOR
    var whiteNav = document.getElementById("navBrand");
    whiteNav.classList.add("navBrandHover");
    whiteNav.classList.remove("navBrandHoverDark");

    // BUTTON COLOR
    var whiteBtn = document.getElementById("btn");
    whiteBtn.classList.add("btn-outline-light");
    whiteBtn.classList.remove("btn-outline-dark");

    // Footer COLOR
    var whiteFooter = document.getElementById("footer");
    whiteFooter.classList.add("footer-light");
    whiteFooter.classList.remove("footer-dark");

    // CrewCard COLOR
    var whiteCrewCard = document.getElementsByClassName("crewCard");
    whiteCrewCard.classList.add("lightCrew");
    whiteCrewCard.classList.remove("darkCrew");
  } else {
    // ICONS
    var modeSun = document.getElementById("sun");
    modeSun.classList.remove("hidden");

    var modeMoon = document.getElementById("moon");
    modeMoon.classList.add("hidden");

    // NAV COLOR
    var darkNav = document.getElementById("mainNav");
    darkNav.classList.add("darkNav");
    darkNav.classList.remove("lightNav");
    // NAVbrand COLOR
    var darkNav = document.getElementById("navBrand");
    darkNav.classList.add("navBrandHoverDark");
    darkNav.classList.remove("navBrandHover");

    // BUTTON COLOR
    var darkBtn = document.getElementById("btn");
    darkBtn.classList.add("btn-outline-dark");
    darkBtn.classList.remove("btn-outline-light");

    // Footer COLOR
    var darkFooter = document.getElementById("footer");
    darkFooter.classList.add("footer-dark");
    darkFooter.classList.remove("footer-light");

    // CrewCard COLOR
    var darkCrewCard = document.getElementsByClassName("crewCard");
    darkCrewCard.classList.add("darkCrew");
    darkCrewCard.classList.remove("lightCrew");
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
  .to(".backgroundDiv", {
    // opacity: 0
    yPercent: -100,
  }, "<")

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
  // markers: true,
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
