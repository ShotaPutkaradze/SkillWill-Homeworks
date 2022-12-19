"use strict";
// 1 ----------------------------------------------
const pipe = function (...rest) {
  let n = rest.length;
  for (let i = 0; i < n; i++) {
    rest[i]();
  }
};
pipe(
  () => console.log(1),
  () => console.log(2),
  () => console.log(3),
  () => console.log(4)
);

// 2 ----------------------------------------------

async function getUsers() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
getUsers();

// 3 - 4 - 5 -------------------------------------
// object for testing deep copy function
const testObj = {
  str: "JavaScript",
  num: 1,
  obj: {
    str2: "react",
    num2: 2,
    obj2: {
      str3: "css",
      num3: 3,
      arr2: [9, 3, 7, "html"],
    },
  },
  arr1: [{ str4: "abc" }, 6, "test"],
};

// deep copy function
function deepCopy(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object") reject("is not an object!");

    let newObj = {};

    for (let fieldName in obj) {
      if (typeof obj[fieldName] === "object") {
        deepCopy(obj[fieldName])
          .then((response) => response)
          .then((data) => (newObj[fieldName] = data));
      } else if (Array.isArray(obj[fieldName]) === "Array") {
        deepCopy[obj[fieldName]]
          .then((response) => response)
          .then((data) => (newObj[fieldName] = data));
      } else {
        newObj[fieldName] = obj[fieldName];
      }
    }
    resolve(newObj);
  });
}

deepCopy(testObj)
  .then((response) => response)
  .then((data) => console.log(data));

console.log(testObj);
