const body = document.querySelector("#body");
const modalDiv = document.querySelector("#modal");
const button = document.querySelector("button");

button.setAttribute("type", "button");
button.setAttribute("id", "button");
button.innerText = "Open Modal";

button.addEventListener("click", () => {
  if (modalDiv.style.display == "none") {
    modalDiv.style.display = "block";
    body.style.backgroundColor = "grey";
  } else {
    modalDiv.style.display = "none";
    body.style.backgroundColor = "white";
  }
});
