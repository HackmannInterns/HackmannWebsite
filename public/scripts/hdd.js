window.onload = function () {
  replaceChildrenById("links");
  replaceChildrenById("content");
  wipefooter("Hackmann Dressup Doll");

  const hack_urls = [
    ["https://images2.imgbox.com/76/1d/SDahVwGW_o.png", "base"],
    ["https://images2.imgbox.com/b5/8e/HSt8kq29_o.png", "xxxhair"],
    ["https://images2.imgbox.com/f3/2b/lKvwtqjf_o.png", "priest"],
    ["https://images2.imgbox.com/2a/1d/Opsyo20n_o.png", "drug"],
    ["https://images2.imgbox.com/95/29/DmZI8PAs_o.png", "drip"],
    ["https://images2.imgbox.com/98/58/fs3qnJD7_o.png", "gasmask"],
    ["https://images2.imgbox.com/11/7c/cq4PeIXR_o.png", "bible"],
    ["https://images2.imgbox.com/be/4a/38wqkZVf_o.png", "pokehat"],
  ];

  for (const url_tup of hack_urls) {
    const img = appendById("content", url_tup); // Assuming "content" is the ID
    centerHorizontally(img); // Ensure this function is defined
  }

  document.querySelector(".base").style.display = "block";

  add_back_arrow();
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
