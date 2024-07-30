const style = document.createElement("style");
style.textContent = `
    .text-overlay {
        opacity: 1;
        transition: opacity 500ms ease-in-out;
        text-shadow: 
          -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px  1px 0 #000,
          1px  1px 0 #000;
}
    }
    .fade-in {
        opacity: 1;
        display: block;
    }
    .fade-out {
        opacity: 0;
        display: block;
    }
`;
document.head.append(style);

const content = document.getElementById("content");

window.onload = function () {
  document.getElementById("nav-bar").remove();
  document.querySelector(".return").style.display = "block";
  document.querySelector(".return").onclick = function () {
    window.location.href = "/summer-2024";
  };
  document.getElementById("content").style.margin = 0;
  document.querySelector("footer").style.left = 0;
  document.querySelector("footer").style.width = "100%";
  replaceChildrenById("content");
  wipefooter("Hackmann Dressup Doll");
  window.removeEventListener("resize", window.hideNavBarOnSmallScreens);

  content.style.display = "grid";
  content.style.gridTemplateColumns = "auto 250px auto";
  content.style.gridTemplateRows = "115px 70px 70px";
  content.style.justifyContent = "center";

  // to encode, put in the array here as hack_urls
  // const jsonString = JSON.stringify(hack_urls);
  // const encodedString = btoa(jsonString);
  // console.log(encodedString);

  // Encode as Base64
  const encodedString =
    "W1siaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vNzYvMWQvU0RhaFZ3R1dfby5wbmciLCJiYXNlIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS9iNS84ZS9IU3Q4a3EyOV9vLnBuZyIsInh4eGhhaXIiXSxbImh0dHBzOi8vaW1hZ2VzMi5pbWdib3guY29tL2YzLzJiL2xLdnd0cWpmX28ucG5nIiwicHJpZXN0Il0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS8yYS8xZC9PcHN5bzIwbl9vLnBuZyIsImRydWciXSxbImh0dHBzOi8vaW1hZ2VzMi5pbWdib3guY29tLzk1LzI5L0RtWkk4UEFzX28ucG5nIiwiZHJpcCJdLFsiaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vOTgvNTgvZnMzcW5KRDdfby5wbmciLCJnYXNtYXNrIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS8xMS83Yy9jcTRQZUlYUl9vLnBuZyIsImJpYmxlIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS9iZS80YS8zOHdxa1pWZl9vLnBuZyIsInBva2VoYXQiXSxbImh0dHBzOi8vaW1hZ2VzMi5pbWdib3guY29tL2RmLzE0L3hPUkJCc3h4X28ucG5nIiwiaGFyaGFyIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS8zNS84MC9WNzdjTlJnel9vLnBuZyIsImRpZmYiXSxbImh0dHBzOi8vaW1hZ2VzMi5pbWdib3guY29tLzkwLzFkL0dKck84UDhVX28ucG5nIiwiY2NwIl0sWyJodHRwczovL2ltYWdlczIuaW1nYm94LmNvbS9lYi9kOC9BVlkxcFRNUl9vLnBuZyIsImdvb2dsZSJdLFsiaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vNWMvOTYvN09zM2Y5YXdfby5wbmciLCJzcGFjZWhlYXRlciJdLFsiaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vZmQvZDEvazg2c24xNjZfby5wbmciLCJsYWluIl0sClsiaHR0cHM6Ly9pbWFnZXMyLmltZ2JveC5jb20vY2YvODgvcFdpZEpIcVRfby5wbmciLCJsYXJyeSJdXQ==";
  const decodedString = atob(encodedString);
  const decodedArray = JSON.parse(decodedString);

  for (const url_tup of decodedArray) {
    const img = appendById("content", url_tup); // Assuming "content" is the ID
  }

  add_arrows();

  const battleButton = document.createElement("button");
  battleButton.id = "battle";
  battleButton.textContent = "Battle!";
  battleButton.onclick = battle;
  content.appendChild(battleButton);

  content.appendChild(document.createElement("div"));
};

let enemy = null;

function add_arrows() {
  idNames = [
    "forwardHead",
    "backwardHead",
    "forwardAcc",
    "backwardAcc",
    "forwardClothes",
    "backwardClothes",
  ];
  document.querySelector(".base").style.display = "block";

  for (let i = 0; i < idNames.length; i++) {
    add_arrow(i);
    i++;
    content.appendChild(document.createElement("div"));
    add_arrow(i);
  }
  content.appendChild(document.createElement("div"));

  function add_arrow(i) {
    const img = document.createElement("img");
    img.src = "https://images2.imgbox.com/55/4f/MQ0iqZOH_o.png";
    img.onclick = function (event) {
      cycle(event);
    };
    const element = document.getElementById("content");
    element.appendChild(img);
    img.id = idNames[i];
    img.style.zIndex = 1;
    if (i <= 1) {
      img.style.marginTop = "50px";
    }
    if (i % 2 == 0) {
      img.style.transform = "scaleX(-1)";
    }
  }
}

let headCtr = 0;
let clothesCtr = 0;
let accessCtr = 0;
const hack_modifiers = [
  ".priest",
  ".drug",
  ".drip",
  ".xxxhair",
  ".gasmask",
  ".pokehat",
  ".bible",
];

function cycle(event) {
  const clickedButton = event.target;

  const hack_modifiers_head = ["none", ".xxxhair", ".gasmask", ".pokehat"];

  const hack_modifiers_access = ["none", ".bible"];

  const hack_modifiers_clothes = ["none", ".priest", ".drug", ".drip"];

  hack_modifiers.forEach((mod) => {
    document.querySelector(mod).style.display = "none";
  });

  if (clickedButton.id === "forwardHead") {
    headCtr = (headCtr + 1) % hack_modifiers_head.length;
  } else if (clickedButton.id === "backwardHead") {
    headCtr =
      (headCtr - 1 + hack_modifiers_head.length) % hack_modifiers_head.length;
  }

  if (clickedButton.id === "forwardAcc") {
    accessCtr = (accessCtr + 1) % hack_modifiers_access.length;
  } else if (clickedButton.id === "backwardAcc") {
    accessCtr =
      (accessCtr - 1 + hack_modifiers_access.length) %
      hack_modifiers_access.length;
  }

  if (clickedButton.id === "forwardClothes") {
    clothesCtr = (clothesCtr + 1) % hack_modifiers_clothes.length;
  } else if (clickedButton.id === "backwardClothes") {
    clothesCtr =
      (clothesCtr - 1 + hack_modifiers_clothes.length) %
      hack_modifiers_clothes.length;
  }

  if (hack_modifiers_head[headCtr] != "none") {
    headElement = document.querySelector(
      hack_modifiers_head[headCtr]
    ).style.display = "block";
  }

  if (hack_modifiers_access[accessCtr] != "none") {
    const accessElement = (document.querySelector(
      hack_modifiers_access[accessCtr]
    ).style.display = "block");
  }

  if (hack_modifiers_clothes[clothesCtr] != "none") {
    const clothesElement = (document.querySelector(
      hack_modifiers_clothes[clothesCtr]
    ).style.display = "block");
  }
}

function wipefooter(text) {
  document.querySelector("footer").innerHTML = text;
}

function replaceChildrenById(id) {
  const element = document.getElementById(id);

  if (element) {
    element.replaceChildren();
  }
}

function appendById(id, image) {
  const img = document.createElement("img");
  img.src = image[0];
  img.className = image[1];
  const element = document.getElementById(id);
  element.appendChild(img);

  img.style.display = "none";
  img.style.position = "absolute";
  img.style.left = "calc(50% - 100px)";
  img.style.top = "50px";
  return img;
}

function updateeHealth(percentage) {
  updateHealth(percentage, "ehealth-bar", "eempty-bar", "enemy-bar", "win");
}

function updatehHealth(percentage) {
  updateHealth(percentage, "health-bar", "empty-bar", "main-bar", "lose");
}

function updateHealth(
  percentage,
  healthBarId,
  emptyBarId,
  barId,
  winCondition
) {
  const totalBars = 20; // Total number of bars
  const healthBars = Math.round((percentage / 100) * totalBars);
  const emptyBars = totalBars - healthBars;

  const healthBarElement = document.getElementById(healthBarId);
  const emptyBarElement = document.getElementById(emptyBarId);
  const barElement = document.getElementById(barId);

  if (healthBars <= 0) {
    barElement.style.display = "none";
    enemy.element.onclick = function () {};
    if (winCondition === "lose") {
      lose();
    } else {
      win();
    }
  } else {
    healthBarElement.textContent = "█".repeat(healthBars);
    emptyBarElement.textContent = "░".repeat(emptyBars);
  }

  function win() {
    enemy.element.style.display = "none";
    wipefooter("You WIN");
    document.querySelector("footer").style.fontSize = "100px";
    document.querySelector("footer").style.color = "green";
  }

  function lose() {
    hack_modifiers.push(".base");
    for (const image of hack_modifiers) {
      document.querySelector(image).style.display = "none";
    }
    wipefooter("You Lose");
    document.querySelector("footer").style.fontSize = "100px";
    document.querySelector("footer").style.color = "red";
  }
}

function battle() {
  let buttons = [
    "#backwardAcc",
    "#forwardAcc",
    "#backwardHead",
    "#forwardHead",
    "#backwardClothes",
    "#forwardClothes",
    "#battle",
  ];
  wipefooter(`
  <span id="main-bar">
    Hackmann: 
    <span id="health-bar" class="health-bar"></span>
    <span id="empty-bar" class="empty-bar"></span>
    <br>
  </span>
    <span id="enemy-bar">
      Enemy: 
      <span id="ehealth-bar" class="ehealth-bar"></span>
      <span id="eempty-bar" class="eempty-bar"></span>
    </span>
  </span>
`);
  updatehHealth(100);
  updateeHealth(100);
  for (const selector of buttons) {
    document.querySelector(selector).style.display = "none";
  }

  hack_modifiers.push(".base");
  for (const image of hack_modifiers) {
    document.querySelector(image).style.top = "500px";
  }
  enemy = new Enemy();
}

const mainHealthStart = 130;
const enemyHealthStart = 60;
const mainAttackMod = 0.5;
const enemyAttackMod = 1;
let mainHealth = { value: mainHealthStart };
let enemyHealth = { value: enemyHealthStart };

function turn() {
  hackAttack();

  if (enemyHealth.value > 0) {
    enemyAttack();
  }

  function performAttack(
    attackMod,
    container,
    container2Selector,
    health,
    healthStart,
    updateHealthFunc
  ) {
    let crit = Math.floor(Math.random() * 10) === 0;
    let miss = Math.floor(Math.random() * 10) === 0;
    let dmg =
      Math.floor((Math.random() * 5 + 6) * attackMod) *
      (crit ? 2 : miss ? 0 : 1);

    const container2 = document.querySelector(container2Selector);
    const modifier = crit ? "Crit<br>" : miss ? "Miss<br>" : "";
    const textOverlay = createTextOverlay(container2, `${modifier}-` + dmg);
    randomPosition(textOverlay, container);
    fade(textOverlay);

    health.value = health.value - dmg;
    updateHealthFunc(Math.floor((health.value / healthStart) * 100));
  }

  function hackAttack() {
    performAttack(
      mainAttackMod,
      enemy.element,
      "#content",
      enemyHealth,
      enemyHealthStart,
      updateeHealth
    );
  }

  function enemyAttack() {
    performAttack(
      enemyAttackMod,
      document.querySelector("#content > img.base"),
      "#content",
      mainHealth,
      mainHealthStart,
      updatehHealth
    );
  }
}

function randomPosition(element, container) {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const elementWidth = element.offsetWidth;
  const elementHeight = element.offsetHeight;
  const containerLeft = container.getBoundingClientRect().left;
  const containerTop = container.getBoundingClientRect().top;

  let x = Math.random() * (containerWidth - elementWidth);
  x = x + containerLeft;
  let y = Math.random() * (containerHeight - elementHeight);
  y = y + containerTop;

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function createTextOverlay(container, text) {
  const textElement = document.createElement("p");
  textElement.className = "text-overlay";
  textElement.innerHTML = text;

  textElement.style.zIndex = 900;
  textElement.style.position = "absolute";
  textElement.style.display = "true";
  textElement.style.color = "red";
  textElement.style.fontWeight = "Bolder";
  textElement.style.fontSize = "40px";
  textElement.style.pointerEvents = "none";
  textElement.style.whiteSpace = "nowrap";

  container.appendChild(textElement);
  return textElement;
}

function fade(fadeEle) {
  fadeEle.style.display = "block";
  fadeEle.classList.add("fade-in");

  setTimeout(() => {
    fadeEle.classList.remove("fade-in");
    fadeEle.classList.add("fade-out");

    setTimeout(() => {
      fadeEle.classList.remove("fade-out");
      fadeEle.style.display = "none";
    }, 500);
  }, 500);
}

class Enemy {
  array_of_enemies = [
    ".harhar",
    ".diff",
    ".ccp",
    ".google",
    ".spaceheater",
    ".lain",
    ".larry",
  ];

  constructor() {
    this.img = this.setImage();
    this.element = document.querySelector(this.img);
    this.element.style.display = "block";
    this.element.style.height = "300px";
    this.element.style.width = "300px";
    this.element.style.position = "absolute";
    this.element.style.left = "calc(50% - 150px)";
    this.element.style.top = "50px";
    this.element.zIndex = 0;
    this.element.onclick = function () {
      turn();
    };
  }

  setImage(min = 0, max = this.array_of_enemies.length) {
    const rng = Math.floor(Math.random() * (max - min)) + min;
    return this.array_of_enemies[rng];
  }
}
