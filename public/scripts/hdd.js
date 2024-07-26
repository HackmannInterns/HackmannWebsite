window.onload = function () {
  replaceChildrenById("links");
  replaceChildrenById("content");
  wipefooter("Hackmann Dressup Doll");

  const content = document.getElementById("content");
  content.style.display = "grid";
  content.style.gridTemplateColumns = "auto 33% auto";
  content.style.justifyContent = "center";


  // to encode, put in the array here as hack_urls

  // const jsonString = JSON.stringify(hack_urls);

  // Encode as Base64
  const encodedString = "W1siaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vNzYvMWQvU0RhaFZ3R1dfby5wbmciLCJiYXNlIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS9iNS84ZS9IU3Q4a3EyOV9vLnBuZyIsInh4eGhhaXIiXSxbImh0dHBzOi8vaW1hZ2VzMi5pbWdib3guY29tL2YzLzJiL2xLdnd0cWpmX28ucG5nIiwicHJpZXN0Il0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS8yYS8xZC9PcHN5bzIwbl9vLnBuZyIsImRydWciXSxbImh0dHBzOi8vaW1hZ2VzMi5pbWdib3guY29tLzk1LzI5L0RtWkk4UEFzX28ucG5nIiwiZHJpcCJdLFsiaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vOTgvNTgvZnMzcW5KRDdfby5wbmciLCJnYXNtYXNrIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS8xMS83Yy9jcTRQZUlYUl9vLnBuZyIsImJpYmxlIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS9iZS80YS8zOHdxa1pWZl9vLnBuZyIsInBva2VoYXQiXV0=";
  const decodedString = atob(encodedString);
  const decodedArray = JSON.parse(decodedString);

  for (const url_tup of decodedArray) {
    const img = appendById("content", url_tup); // Assuming "content" is the ID
    centerHorizontally(img); // Ensure this function is defined
  }

  add_back_arrow();

  document.querySelector(".base").style.display = "block";
  
  const divider = document.createElement("div");
  content.appendChild(divider);
  
  add_arrow();

  
};

function add_arrow() {
  const img = document.createElement("img");
  img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
  img.onclick = function (event) {
    cycle(event);
  };
  const element = document.getElementById("content"); // Use the ID provided
  element.appendChild(img);
  img.id = "forward";
  img.style.paddingTop = "50px";

}

function add_back_arrow() {
  const img = document.createElement("img");
  img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
  img.onclick = function (event) {
    cycle(event);
  };
  const element = document.getElementById("content"); // Use the ID provided
  element.appendChild(img);
  img.id = "backward";
  img.style.transform = "scaleX(-1)";
  img.style.paddingTop = "50px";
}

let ctr = 0;
function cycle(event) {
  const clickedButton = event.target;

  const hack_modifiers = [
    ".xxxhair",
    ".priest",
    ".drug",
    ".drip",
    ".gasmask",
    ".bible",
    ".pokehat",
  ];

  hack_modifiers.forEach((element) => {
    document.querySelector(element).style.display = "none";
  });

  //   if (ctr > 0) {
  //     document.querySelector(hack_modifiers[ctr - 1]).style.display = "none";
  //   } else if (ctr == 0) {
  //     document.querySelector(
  //       hack_modifiers[hack_modifiers.length - 1]
  //     ).style.display = "none";
  //   }

  if (clickedButton.id == "forward") {
    ctr = (ctr + 1) % hack_modifiers.length;
  } else if (clickedButton.id == "backward") {
    ctr--;
    if (ctr < 0) {
      ctr = hack_modifiers.length - 1;
    }
  }

  const currentElement = document.querySelector(hack_modifiers[ctr]);
  if (currentElement) {
    currentElement.style.display = "block";
  }
}

function clearPage() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}

function wipefooter(text) {
  document.querySelector("footer").textContent = text;
}

function centerHorizontally(element) {
  element.style.marginLeft = "auto";
  element.style.marginRight = "auto";
  // element.style.display = "block"; // Ensure the element is a block-level element
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

function appendById(id, image) {
  const img = document.createElement("img");
  img.src = image[0];
  img.className = image[1];
  const element = document.getElementById(id); // Use the ID provided
  element.appendChild(img);

  img.style.display = "none";
  img.style.position = "absolute";
  img.style.left = "50%";
  img.style.top = "50px";
  return img;
}
