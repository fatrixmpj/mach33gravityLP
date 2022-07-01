
var getLocalDarkVar = localStorage.getItem('dark');
if(getLocalDarkVar == "true") {
  console.log("dark Theme");
  toggleDarkMode();
}else {
  console.log("Light Theme");
  toggleWhiteMode();
}

// FIXME: Fix toggles
function toggleWhiteMode() {
  var body = document.body;
  body.classList.toggle("whiteMode");

  if (document.body.classList.contains("whiteMode")) {
		localStorage.removeItem('light', true);	
    localStorage.setItem('dark',false);

    // ICONS
    var modeSun = document.getElementById("btnSun");
    modeSun.classList.add("hidden");

    var modeMoon = document.getElementById("btnMoon");
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

    // BUTTON Sun COLOR
    var whiteBtn = document.getElementById("btnSun");
    whiteBtn.classList.add("btn-outline-light");
    whiteBtn.classList.remove("btn-outline-dark");

    // BUTTON Moon COLOR
    var whiteBtn = document.getElementById("btnMoon");
    whiteBtn.classList.add("btn-outline-light");
    whiteBtn.classList.remove("btn-outline-dark");

    // Footer COLOR
    var whiteFooter = document.getElementById("footer");
    whiteFooter.classList.add("footer-light");
    whiteFooter.classList.remove("footer-dark");
    
    // Modal COLOR
    var whiteModal = document.getElementById("modalMode");
    whiteModal.classList.add("modalContentLight");
    whiteModal.classList.remove("modalContentDark");

    // Table Header COLOR
    var whiteTable = document.getElementsByClassName("tableHeader");
    whiteTable[0].classList.add("thLight");
    whiteTable[0].classList.remove("thDark");

    whiteTable[1].classList.add("thLight");
    whiteTable[1].classList.remove("thDark");

    // Table Text COLOR
    var whiteText = document.getElementsByClassName("ttDarkLight");
    whiteText[0].classList.add("ttLight");
    whiteText[0].classList.remove("ttDark");

    whiteText[1].classList.add("ttLight");
    whiteText[1].classList.remove("ttDark");

    whiteText[2].classList.add("ttLight");
    whiteText[2].classList.remove("ttDark");

    whiteText[3].classList.add("ttLight");
    whiteText[3].classList.remove("ttDark");

    whiteText[4].classList.add("ttLight");
    whiteText[4].classList.remove("ttDark");

    whiteText[5].classList.add("ttLight");
    whiteText[5].classList.remove("ttDark");

    whiteText[6].classList.add("ttLight");
    whiteText[6].classList.remove("ttDark");

    whiteText[7].classList.add("ttLight");
    whiteText[7].classList.remove("ttDark");

    // Table Text lighter COLOR
    var whiterText = document.getElementsByClassName("ttDarkerLighter");
    whiterText[0].classList.add("ttLighter");
    whiterText[0].classList.remove("ttDarker");

    whiterText[1].classList.add("ttLighter");
    whiterText[1].classList.remove("ttDarker");

    whiterText[2].classList.add("ttLighter");
    whiterText[2].classList.remove("ttDarker");

    whiterText[3].classList.add("ttLighter");
    whiterText[3].classList.remove("ttDarker");

    whiterText[4].classList.add("ttLighter");
    whiterText[4].classList.remove("ttDarker");

    whiterText[5].classList.add("ttLighter");
    whiterText[5].classList.remove("ttDarker");

    whiterText[6].classList.add("ttLighter");
    whiterText[6].classList.remove("ttDarker");

    whiterText[7].classList.add("ttLighter");
    whiterText[7].classList.remove("ttDarker");

    // Tab COLOR
    var whiteTab = document.getElementById("tab");
    whiteTab.classList.add("tabLight");
    whiteTab.classList.remove("tabDark");

    // Tabcontent main COLOR
    var whiteTabcontent = document.getElementById("Main");
    whiteTabcontent.classList.add("tabcontentLight");
    whiteTabcontent.classList.remove("tabcontentDark");

    // Tabcontent backup COLOR
    var whiteTabcontentBack = document.getElementById("Backup");
    whiteTabcontentBack.classList.add("tabcontentLight");
    whiteTabcontentBack.classList.remove("tabcontentDark");

    // Tablinks COLOR
    var whiteTablinks = document.getElementsByClassName("tablinks");
    whiteTablinks[0].classList.add("tablinksWhite");
    whiteTablinks[0].classList.remove("tablinksDark");

    whiteTablinks[1].classList.add("tablinksWhite");
    whiteTablinks[1].classList.remove("tablinksDark");
  } else {
    toggleDarkMode();
  }
}

function toggleDarkMode() {

  var body = document.body;
  body.classList.toggle("darkMode");

  if (document.body.classList.contains("darkMode")) {
		localStorage.removeItem('light', true);	
    localStorage.setItem('dark',false);

    
    localStorage.setItem('dark',true);
    localStorage.removeItem('light', false);	

    // ICONS
    var modeSun = document.getElementById("btnSun");
    modeSun.classList.remove("hidden");

    var modeMoon = document.getElementById("btnMoon");
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

    // BUTTON Sun COLOR
    var darkBtn = document.getElementById("btnSun");
    darkBtn.classList.add("btn-outline-dark");
    darkBtn.classList.remove("btn-outline-light");

    // BUTTON Moon COLOR
    var darkBtn = document.getElementById("btnMoon");
    darkBtn.classList.add("btn-outline-dark");
    darkBtn.classList.remove("btn-outline-light");

    // Footer COLOR
    var darkFooter = document.getElementById("footer");
    darkFooter.classList.add("footer-dark");
    darkFooter.classList.remove("footer-light");
    
    // Modal COLOR
    var darkModal = document.getElementById("modalMode");
    darkModal.classList.add("modalContentDark");
    darkModal.classList.remove("modalContentLight");

    // Table Header COLOR
    var darkTable = document.getElementsByClassName("tableHeader");
    darkTable[0].classList.add("thDark");
    darkTable[0].classList.remove("thLight");

    darkTable[1].classList.add("thDark");
    darkTable[1].classList.remove("thLight");

    // Table Text COLOR
    var darkText = document.getElementsByClassName("ttDarkLight");
    darkText[0].classList.add("ttDark");
    darkText[0].classList.remove("ttLight");

    darkText[1].classList.add("ttDark");
    darkText[1].classList.remove("ttLight");

    darkText[2].classList.add("ttDark");
    darkText[2].classList.remove("ttLight");

    darkText[3].classList.add("ttDark");
    darkText[3].classList.remove("ttLight");

    darkText[4].classList.add("ttDark");
    darkText[4].classList.remove("ttLight");

    darkText[5].classList.add("ttDark");
    darkText[5].classList.remove("ttLight");

    darkText[6].classList.add("ttDark");
    darkText[6].classList.remove("ttLight");

    darkText[7].classList.add("ttDark");
    darkText[7].classList.remove("ttLight");

    // Table Text lighter COLOR
    var darkerText = document.getElementsByClassName("ttDarkerLighter");
    darkerText[0].classList.add("ttDarker");
    darkerText[0].classList.remove("ttLighter");

    darkerText[1].classList.add("ttDarker");
    darkerText[1].classList.remove("ttLighter");

    darkerText[2].classList.add("ttDarker");
    darkerText[2].classList.remove("ttLighter");

    darkerText[3].classList.add("ttDarker");
    darkerText[3].classList.remove("ttLighter");

    darkerText[4].classList.add("ttDarker");
    darkerText[4].classList.remove("ttLighter");

    darkerText[5].classList.add("ttDarker");
    darkerText[5].classList.remove("ttLighter");

    darkerText[6].classList.add("ttDarker");
    darkerText[6].classList.remove("ttLighter");

    darkerText[7].classList.add("ttDarker");
    darkerText[7].classList.remove("ttLighter");

    // Tab COLOR
    var darkTab = document.getElementById("tab");
    darkTab.classList.remove("tabLight");
    darkTab.classList.add("tabDark");

    // Tabcontent main COLOR
    var darkTabcontent = document.getElementById("Main");
    darkTabcontent.classList.add("tabcontentDark");
    darkTabcontent.classList.remove("tabcontentLight");

    // Tabcontent backup COLOR
    var darkTabcontentBack = document.getElementById("Backup");
    darkTabcontentBack.classList.add("tabcontentDark");
    darkTabcontentBack.classList.remove("tabcontentLight");

    // Tablinks COLOR
    var darkTablinks = document.getElementsByClassName("tablinks");
    darkTablinks[0].classList.add("tablinksDark");
    darkTablinks[0].classList.remove("tablinksWhite");

    darkTablinks[1].classList.add("tablinksDark");
    darkTablinks[1].classList.remove("tablinksWhite");
    } else {
    toggleWhiteMode();
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

// Intro
let introTl = gsap.timeline({
  defaults: {
    duration: 3,
    ease: "none"
  }
});

introTl.set(".navImg", {
  xPercent: 45,
  width: "50%"
})
.set(".nav-link", {
  opacity: 0
}, 0)
// .set(".mainNav", {
//   backgroundColor: "transparent",
//   boxShadow: "none"
// }, 0)
.set(".modeToggle", {
  opacity: 0
}, 0)
.set(".section", {
  display: "none"
}, 0)
.to(".navImg", {
  rotate: 360,
  xPercent: 0,
  yPercent: 0,
  width: "2vw",
  delay: 1,
  onComplete: textScramble
})

function textScramble() {

  // Textscramble
let textTl = gsap.timeline({
  delay: 0,
  duration: 5,
  ease: "none"
});

textTl
.to(".nav-link", {
  duration: 2,
  opacity: 1,
  scrambleText: {
    text: "{original}",
    chars: "upperAndLowerCase",
    tweenLength: true
  }
}, 0)
// .to(".mainNav", {
//   backgroundColor: "#4d4d4d",
//   boxShadow: "0 2px 10px 10px #262626"
// }, 0)
.to(".modeToggle", {
  opacity: 1
}, 0)
.to(".descriptionP", {
  duration: 3,
  scrambleText: {
    text: "Watch the Earth from space and learn about the mission of the rocket you own a piece of", 
    chars: "upperAndLowerCase",
    // revealDelay: 0.5,
    tweenLength: true
  }
}, 0)
.to(".descriptionH1", {
  duration: 3,
  scrambleText: {
    text: "Gravity", 
    chars: "upperAndLowerCase",
    // revealDelay: 0.5,
    tweenLength: true
  }
}, 0)
.set(".descriptionH6", {
  opacity: 1
}, ">")
.to(".descriptionH6", {
  duration: 3,
  scrambleText: {
    text: "Mach 33", 
    chars: "upperAndLowerCase",
    // revealDelay: 0.5,
    tweenLength: true
  }
}, ">")
.to(".scroll-down", {
  duration: 3,
  scrambleText: {
    text: "Scroll down", 
    chars: "upperAndLowerCase",
    // revealDelay: 0.5,
    tweenLength: true
  }
}, "<")
.set(".arrow", {
  opacity: 1,
  onComplete: setMain
}, ">-=0.6");

}

function setMain() {
  gsap.set(".section", {
    display: "block",
    onComplete: gsapFunc
  });
}

function gsapFunc() {

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
  .to(".fa-arrow-down", {
    yPercent: -1500,
  }, "<")

  .from(
    ".section1",
    {
      opacity: 0,
    },
    "<"
  )
  .to(".nav-link1", {
    color: "#278bd8"
  }, "<-=0.5")
  
  .from(".section1", { duration: 2 })

  .from(".section1", {
    opacity: 1,
  })
  .to(".nav-link1", {
    color: "#d87427"
  }, "<-=0.5")
  .from(".section2", {
    opacity: 0,
  })
  .to(".nav-link2", {
    color: "#278bd8"
  }, "<-=0.5")

  .from(".section1", { duration: 2 })

  .from(".section2", {
    opacity: 1,
  })
  .to(".nav-link2", {
    color: "#d87427"
  }, "<-=0.5")
  .from(".section3", {
    opacity: 0,
  })
  .to(".nav-link3", {
    color: "#278bd8"
  }, "<-=0.5")

  .from(".section1", { duration: 2 })

  .from(".section3", {
    opacity: 1,
  })
  .to(".nav-link3", {
    color: "#d87427"
  }, "<-=0.5")
  .from(".section4", {
    opacity: 0,
  })
  .to(".nav-link4", {
    color: "#278bd8"
  }, "<-=0.5")

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
}, "0")
.to(".arrowPath", {
  // duration: 4,
  drawSVG: "100%"
}, 0.5)
.set(".arrowMarker", {
  opacity: 1
}, 1.1);

ScrollTrigger.create({
  animation: watchTextTl,
  trigger: ".watchFacts",
  start: "240% top",
  end: "600%",
  scrub: true,
  // markers: true,
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
}, "0")
.from(".factPtext", {
  xPercent: -10
}, "0")
.from("#myModalBtn", {
  xPercent: -10
}, 0);

ScrollTrigger.create({
  animation: rocketTextTl,
  trigger: ".facts",
  start: "550% top",
  end: "900%",
  scrub: true,
  // markers: true,
});

}

// MotionPathHelper.create(".rocketSVG")

// GSDevTools.create({animation: introTl});


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


// *********
// * Modal *
// *********
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  // modal.style.display = "block";
  gsap.to(".w3modal", {
    // duration: 3,
    y: -300
  })
  gsap.to(".w3modal", {
    // duration: 3,
    display: "block",
  })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  // modal.style.display = "none";
  gsap.to(".w3modal", {
    // duration: 3,
    y: 300
  })
  gsap.to(".w3modal", {
    // duration: 3,
    display: "none",
  })
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    // modal.style.display = "none";
    gsap.to(".w3modal", {
      // duration: 3,
      y: 300
    })
    gsap.to(".w3modal", {
      // duration: 3,
      display: "none",
    })
  }
}


// ****************
// * Cookie Modal *
// ****************
var getLocalCookieVar = localStorage.getItem('cookie');
if(getLocalCookieVar == "true") {
  console.log("consent");

}else {
  console.log("no consent");
  gsap.to(".cookieModal", {
    y: -100
  })
  gsap.to(".cookieModal", {
    display: "block",
  })
}

// Get the button that opens the modal
var cookieBtn = document.getElementById("cookieModalBtn");

// When the user clicks the button to accept 
cookieBtn.onclick = function() {
  localStorage.setItem('cookie',true);

  gsap.to(".cookieModal", {
    // duration: 3,
    y: 100
  })
  gsap.to(".cookieModal", {
    // duration: 3,
    display: "none",
  })
}
