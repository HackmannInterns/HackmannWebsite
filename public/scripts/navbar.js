var hider = document.querySelector(".hide");
var returner = document.querySelector(".return");
var navbar = document.querySelector("#nav-bar");
function nav_hide() {
  navbar.style.display = "none";
  returner.style.display = "block";
}
function nav_return() {
  navbar.style.display = "block";
  returner.style.display = "none";
}

function hideNavBarOnSmallScreens() {
  if (window.innerWidth <= 768) {
    navbar.style.display = "none";
    nav_hide();
    hider.style.display = "block";
} else {
    navbar.style.display = "block"; // Reset display when window is larger than 768px
    nav_return();
    hider.style.display = "none";
  }
}

// Run the function on window resize
window.addEventListener("resize", hideNavBarOnSmallScreens);

// Run the function on initial load
hideNavBarOnSmallScreens();
