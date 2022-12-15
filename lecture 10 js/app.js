"use strict";
// 1 ----------------------------------------
// then
const deleyMs = 2000;
const mySetTimeout = function (ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};
mySetTimeout(deleyMs).then(() => console.log(`deley ${deleyMs} ms`));

// async
const mySetTimeout2 = async function (ms) {
  await new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};
mySetTimeout2(deleyMs).then(() => console.log(`deley ${deleyMs} ms`));

// 2 -----------------------------------------------
const getFacebookProfile = function (id, friendID) {
  return new Promise(function (resolve, reject) {});
};

// then
getFacebookProfile(1, "(profile)")
  .then((res) => getFacebookProfile("profile.friends[0].id", "(friendProfile)"))
  .then((res) => getFacebookProfile("friendProfile.friends[0].id", "(friendsFriend)"))
  .then((res) => getFacebookProfile("firendsFriend.friends[0].id", "(finalProfile)"))
  .then((res) => console.log("Finally, I have all the profiles"))
  .catch((err) => console.log("some error"));

//async
const getFacebookProfile2 = async function (id, friendID) {
  try {
    await getFacebookProfile(1, "(profile)");
    await getFacebookProfile("profile.friends[0].id", "(friendProfile)");
    await getFacebookProfile("friendProfile.friends[0].id", "(friendsFriend)");
    await getFacebookProfile("firendsFriend.friends[0].id", "(finalProfile)");
  } catch (err) {
    console.log("some error");
  } finally {
    console.log("Finally, I have all the profiles");
  }
};
