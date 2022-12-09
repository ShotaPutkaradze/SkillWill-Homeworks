// 1 --------------------------------
const replace = (string, valueToReplace, valueToReplaceWith) =>
  string.slice(0, string.indexOf(valueToReplace)) +
  valueToReplaceWith +
  string.slice(string.indexOf(valueToReplace) + valueToReplace.length);

console.log(replace("JavaScript is beautiful programming language", "beautiful", "awesome"));
// JavaScript is awesome programming language

// 2 --------------------------------

const upper = (string) =>
  string
    .split(" ")
    .map((v) => v[0].toUpperCase(0) + v.slice(1))
    .join(" ");

console.log(upper("javaScript is beautiful programming language"));
// JavaScript Is Beautiful Programming Language

// 3 --------------------------------

const listedUsers = (users) => {
  let result = [];

  const tmpArray = users.map((v) => v.age).sort(); // returns sorted age
  for (const i of tmpArray) {
    for (const user of users) {
      if (user.age === i) {
        result.push(user);
      }
    }
  }
  return result;
};

const users = [
  { name: "Lasha", age: 30 },
  { name: "Giorgi", age: 18 },
  { name: "Saba", age: 20 },
  { name: "Shota", age: 40 },
  { name: "Ilia", age: 33 },
];

console.log(listedUsers(users));
// returns sorted
