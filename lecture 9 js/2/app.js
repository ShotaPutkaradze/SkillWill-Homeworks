const body = document.querySelector("#body");
const colors = ["red", "blue", "green", "black", "white"];

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  let input = document.querySelector("input");
  colors.includes(input.value) ? (body.style.backgroundColor = input.value) : alert("wrong color");
});
