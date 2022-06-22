
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

    // Progressbar COLOR
    var whiteProgress = document.getElementById("progress-bar");
    whiteProgress.classList.add("progress-bar-light");
    whiteProgress.classList.remove("progress-bar-dark");

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

    // Progressbar COLOR
    var darkProgress = document.getElementById("progress-bar");
    darkProgress.classList.add("progress-bar-dark");
    darkProgress.classList.remove("progress-bar-light");

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

// Textscramble
let textTl = gsap.timeline({
  duration: 3,
  ease: "none"
});

textTl.to(".descriptionP", {
  text: "Watch the Earth from space and learn about the mission of the rocket you own a piece of", 
})
.to(".descriptionH1", {
  text: "Gravity", 
}, "<")
.set(".descriptionH6", {
  opacity: 1
})
.to(".descriptionH6", {
  text: "Mach 33", 
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

// ScrollTrigger
gsap.defaults({ ease: "none", duration: 1 });

let scrollTl = gsap.timeline();

scrollTl.to(".scroll-down", {
    yPercent: -1500,
  })
  .to(".backgroundDiv", {
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

  .from(".section1", { duration: 2 })

  .from(".section3", {
    opacity: 1,
  })
  .from(".section4", {
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

// Watch Facts 
let watchTextTl = gsap.timeline();

watchTextTl.from(".watchText", {
  xPercent: 10
})
.from(".watchImgContainer", {
  xPercent: -10
}, "0")
.from(".watchLi", {
  xPercent: 10
}, "0");

ScrollTrigger.create({
  animation: watchTextTl,
  trigger: ".watchFacts",
  start: "300% top",
  end: "600%",
  scrub: true,
  markers: true,
});

// Rocket Facts 
let rocketTextTl = gsap.timeline();

rocketTextTl.from(".imageMission", {
  xPercent: 10
})
.from(".imageCrew", {
  xPercent: -10
}, "0")
.from(".imagePatch", {
  xPercent: 10
}, "0")
.from(".rocketLi", {
  xPercent: -10
}, "0");

ScrollTrigger.create({
  animation: rocketTextTl,
  trigger: ".facts",
  start: "550% top",
  end: "900%",
  scrub: true,
  markers: true,
});

// GSDevTools.create();to


// ***************************************
// * The progress bar (scroll indicator) *
// ***************************************
const animateProgressBar = () => {

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

}

window.addEventListener('scroll', animateProgressBar);
