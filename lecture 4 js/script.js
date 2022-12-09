// 1 ---------------------------------
function func(a, b, ...others) {
  let multiple = 1;
  for (i of others) {
    multiple *= i;
  }
  return [a + b, multiple];
}

console.log(func(1, 2, 3, 4, 5)); //  [3, 60]

// 2 ---------------------------------
const users = {
  banks: ["element1", "element2", { address: { city: "Batumi" } }],
};

const {
  banks: [
    ,
    ,
    {
      address: { city },
    },
  ],
} = users;
console.log(city); // Batumi

// 3 ---------------------------------
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
console.log(user.skills.other.skill3); //  css

console.log(newUser.firstName); //  Giorgi
console.log(newUser.skills.skill2); //  html
console.log(newUser.skills.other.skill3); //  Typescript

console.log(user);
console.log(newUser);

// newUserObj[fieldName] = Object.assign({}, user[fieldName]);
