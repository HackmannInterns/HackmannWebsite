window.onload = function () {
  clearPage();
};

function clearPage() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}

function centerHorizontally(element) {
  element.style.marginLeft = "auto";
  element.style.marginRight = "auto";
  element.style.display = "block"; // Ensure the element is a block-level element
  element.style.width = "auto"; // Set a fixed width or use any desired width
}

//clears children, needs to add a 2nd parameter to replace with
function replaceChildrenById(id) {
  // Get the element by ID
  const element = document.getElementById(id);

  if (element) {
    // Replace all child nodes with new content
    element.replaceChildren();
  }
}

const img = document.createElement("img");
img.src = base64_img;

function appendById(id) {
  const element = document.getElementById(id);

  element.appendChild(img);
}
