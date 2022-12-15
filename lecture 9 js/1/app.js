const body = document.querySelector(".body");
const modal = document.querySelector(".modal");
const button = document.querySelector(".button");
const closeBtn = document.querySelector(".closeBtn");

button.setAttribute("type", "button");
button.setAttribute("id", "button");
button.innerText = "Open Modal";

button.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
