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
