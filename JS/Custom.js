function toggleWhiteMode() {
  var body = document.body;
  body.classList.toggle("whiteMode");

  if (document.body.classList.contains("whiteMode")) {
    var modeSun = document.getElementById("sun");
    modeSun.classList.add("hidden");

    var modeMoon = document.getElementById("moon");
    modeMoon.classList.remove("hidden");

    var whiteNav = document.getElementById("mainNav");
    whiteNav.classList.add("bg-light");
    whiteNav.classList.remove("darkNav");
  } else {
    var modeSun = document.getElementById("sun");
    modeSun.classList.remove("hidden");

    var modeMoon = document.getElementById("moon");
    modeMoon.classList.add("hidden");

    var whiteNav = document.getElementById("mainNav");
    whiteNav.classList.add("darkNav");
    whiteNav.classList.remove("bg-light");
  }
}
