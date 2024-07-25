foot = document.querySelector("footer");
function hideNavBarOnSmallScreens() {
  if (window.innerWidth <= 768) {
    foot.style.width = "100%"
    foot.style.left = "0"
} else {
    foot.style.width ="calc(100% - 230px)"
    foot.style.left = "230px"
    foot.style.justify = "center"
  }
}

// Run the function on window resize
window.addEventListener("resize", hideNavBarOnSmallScreens);

// Run the function on initial load
hideNavBarOnSmallScreens();
