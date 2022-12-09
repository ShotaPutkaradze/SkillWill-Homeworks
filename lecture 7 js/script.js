"use strict";

// 1 ---------------
let button = document.querySelector("#hider");
let div = document.querySelector("#text");

button.addEventListener("click", () => {
  div.style.display !== "none" ? (div.style.display = "none") : (div.style.display = "block");
});

// 2 ---------------

document.body.insertAdjacentHTML("afterend", "<div id='card'><h2>Vaniko</h2><a href='#'>Go to profile</a><div>");

// 3 ---------------
const card = document.querySelector("#card");
card.style.backgroundColor = "red";
