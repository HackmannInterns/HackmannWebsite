var hider = document.querySelector("#nav-bar > p")
var returner = document.querySelector("#flex-container > div:nth-child(1) > p")
var navbar = document.querySelector("#nav-bar")
function nav_hide() {
  navbar.style.display = 'none'
  returner.style.display = 'block'
} 
function nav_return() {
  navbar.style.display = 'block'
  returner.style.display = 'none'
} 