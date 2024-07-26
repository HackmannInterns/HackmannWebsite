window.onload = function () {
  replaceChildrenById("links");
  replaceChildrenById("content");
  wipefooter("Hackmann Dressup Doll");

  const content = document.getElementById("content");
  content.style.display = "grid";
  content.style.gridTemplateColumns = "auto 20% auto";
  content.style.justifyContent = "center";

  // to encode, put in the array here as hack_urls

  // const jsonString = JSON.stringify(hack_urls);

  // Encode as Base64
  const encodedString =
    "W1siaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vNzYvMWQvU0RhaFZ3R1dfby5wbmciLCJiYXNlIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS9iNS84ZS9IU3Q4a3EyOV9vLnBuZyIsInh4eGhhaXIiXSxbImh0dHBzOi8vaW1hZ2VzMi5pbWdib3guY29tL2YzLzJiL2xLdnd0cWpmX28ucG5nIiwicHJpZXN0Il0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS8yYS8xZC9PcHN5bzIwbl9vLnBuZyIsImRydWciXSxbImh0dHBzOi8vaW1hZ2VzMi5pbWdib3guY29tLzk1LzI5L0RtWkk4UEFzX28ucG5nIiwiZHJpcCJdLFsiaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vOTgvNTgvZnMzcW5KRDdfby5wbmciLCJnYXNtYXNrIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS8xMS83Yy9jcTRQZUlYUl9vLnBuZyIsImJpYmxlIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS9iZS80YS8zOHdxa1pWZl9vLnBuZyIsInBva2VoYXQiXV0=";
  const decodedString = atob(encodedString);
  const decodedArray = JSON.parse(decodedString);

  for (const url_tup of decodedArray) {
    const img = appendById("content", url_tup); // Assuming "content" is the ID
    centerHorizontally(img); // Ensure this function is defined
  }

  add_back_head_arrow();

  document.querySelector(".base").style.display = "block";

  content.appendChild(document.createElement("div"));

  add_head_arrow();

  add_back_acc_arrow();
  
  content.appendChild(document.createElement("div"));

  add_acc_arrow();

  add_back_clothes_arrow();

  content.appendChild(document.createElement("div"));

  add_clothes_arrow();
};

function add_head_arrow() {
  const img = document.createElement("img");
  img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
  img.onclick = function (event) {
    cycle(event);
  };
  const element = document.getElementById("content"); // Use the ID provided
  element.appendChild(img);
  img.id = "forwardHead";
  img.style.paddingTop = "50px";
}

function add_back_head_arrow() {
  const img = document.createElement("img");
  img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
  img.onclick = function (event) {
    cycle(event);
  };
  const element = document.getElementById("content"); // Use the ID provided
  element.appendChild(img);
  img.id = "backwardHead";
  img.style.transform = "scaleX(-1)";
  img.style.paddingTop = "50px";
}

function add_acc_arrow() {
  const img = document.createElement("img");
  img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
  img.onclick = function (event) {
    cycle(event);
  };
  const element = document.getElementById("content"); // Use the ID provided
  element.appendChild(img);
  img.id = "forwardAcc";
  img.style.paddingTop = "5px";
}

function add_back_acc_arrow() {
  const img = document.createElement("img");
  img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
  img.onclick = function (event) {
    cycle(event);
  };
  const element = document.getElementById("content"); // Use the ID provided
  element.appendChild(img);
  img.id = "backwardAcc";
  img.style.transform = "scaleX(-1)";
  img.style.paddingTop = "5px";
}

function add_clothes_arrow() {
  const img = document.createElement("img");
  img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
  img.onclick = function (event) {
    cycle(event);
  };
  const element = document.getElementById("content"); // Use the ID provided
  element.appendChild(img);
  img.id = "forwardClothes";
  img.style.paddingTop = "5px";
}

function add_back_clothes_arrow() {
  const img = document.createElement("img");
  img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
  img.onclick = function (event) {
    cycle(event);
  };
  const element = document.getElementById("content"); // Use the ID provided
  element.appendChild(img);
  img.id = "backwardClothes";
  img.style.transform = "scaleX(-1)";
  img.style.paddingTop = "5px";
}

let headCtr = 0;
let clothesCtr = 0;
let accessCtr = 0;
function cycle(event) {
  const clickedButton = event.target;

  const hack_modifiers = [
    ".priest",
    ".drug",
    ".drip",
    ".xxxhair",
    ".gasmask",
    ".pokehat",
    ".bible",
  ];

  const hack_modifiers_clothes = [".priest", ".drug", ".drip"];

  const hack_modifiers_head = [".xxxhair", ".gasmask", ".pokehat"];

  const hack_modifiers_access = [".bible"];

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

  if (clickedButton.id == "forwardHead") {
    headCtr = (headCtr + 1) % hack_modifiers_head.length;
  } else if (clickedButton.id == "backwardHead") {
    headCtr--;
    if (headCtr < 0) {
      headCtr = hack_modifiers_head.length - 1;
    }
  }

  if (clickedButton.id == "forwardAcc") {
    accessCtr = (accessCtr + 1) % hack_modifiers_access.length;
  } else if (clickedButton.id == "backwardAcc") {
    accessCtr--;
    if (accessCtr < 0) {
      accessCtr = hack_modifiers_access.length - 1;
    }
  }

  if (clickedButton.id == "forwardClothes") {
    clothesCtr = (clothesCtr + 1) % hack_modifiers_clothes.length;
  } else if (clickedButton.id == "backwardClothes") {
    clothesCtr--;
    if (clothesCtr < 0) {
      clothesCtr = hack_modifiers_clothes.length - 1;
    }
  }

  const headElement = document.querySelector(hack_modifiers_head[headCtr]);
  if (headElement) {
    headElement.style.display = "block";
  }

  const accessElement = document.querySelector(hack_modifiers_access[accessCtr]);
  if (accessElement) {
    accessElement.style.display = "block";
  }

  const clothesElement = document.querySelector(hack_modifiers_clothes[clothesCtr]);
  if (clothesElement) {
    clothesElement.style.display = "block";
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
