const body = document.querySelector("#body");
const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener("click", () => {
  let input = document.querySelector("#input").value;
  let inputArr = input.split(":").map((v) => Number(v));
  let sum = inputArr.reduce((a, b) => a + b, 0);
  alert(sum / inputArr.length);
});
