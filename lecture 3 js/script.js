// 1 ---------------------------------
const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function checkAge(users) {
  let minAge = users[0].age;
  let name;
  for (let item of users) {
    if (item.age < minAge) {
      minAge = item.age;
      name = item.name;
    }
  }
  return name;
}
console.log(checkAge(users)); // lasha

// 2 ---------------------------------
const user = {
  firstName: "Shota",
  lastName: "Putkaradze",
  city: "Batumi",
  skills: {
    skill1: "js",
    skill2: "react",
    other: {
      skill3: "css",
    },
  },
};

function newObj(user) {
  let newUser = {};

  for (let fieldName in user) {
    if (typeof user[fieldName] === "object") {
      newUser[fieldName] = newObj(user[fieldName]);
    } else {
      newUser[fieldName] = user[fieldName];
    }
  }
  return newUser;
}
const newUser = newObj(user);

newUser.firstName = "Giorgi";
newUser.skills.skill2 = "Html";
newUser.skills.other.skill3 = "Typescript";

console.log(user.firstName); //  Shota
console.log(user.skills.skill2); //  react
console.log(user.skills.other.skill3); // css

console.log(newUser.firstName); //  Giorgi
console.log(newUser.skills.skill2); //  html
console.log(newUser.skills.other.skill3); //  Typescript

console.log(user);
console.log(newUser);

// 3 ---------------------------------
const arr = [1, 2, 3, 4, 5, 6];

function randomIndex() {
  return Math.floor(Math.random() * arr.length);
}

function dice(arr) {
  do {
    let indexA = randomIndex();
    let indexB = randomIndex();

    if (arr[indexA] === 3 && arr[indexB] === 3) {
      console.log(arr[indexA], arr[indexB]);
      return "draw";
    } else if (arr[indexA] === 3) {
      console.log(arr[indexA], arr[indexB]);
      return "winner a";
    } else if (arr[indexB] === 3) {
      console.log(arr[indexA], arr[indexB]);
      return "winner b";
    } else {
      console.log(arr[indexA], arr[indexB]);
    }
  } while (true);
}
console.log(dice(arr));
