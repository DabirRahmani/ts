//https://www.typescriptlang.org/docs/handbook/2/basic-types.html

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

// tsc --noEmitOnError  index.ts && node index.js
// using this flag for tsc wont allow tsc to create js file on error

// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }

// greet("Brendan");

// import express from "express";
// const app = express();

// app.get("/", function (req, res) {
//   res.sen
// });

// app.listen(3000);

// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   // ...
// } else if (value === "b") {
//   // Oops, unreachable
// }

// function flipCoin() {
//   // Meant to be Math.random()
//   return Math.random < 0.5;
// }

// const announcement = "Hello World!";

// // How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

// // We probably meant to write this...
// announcement.toLocaleLowerCase();

// const user = {
//   name: "Daniel",
//   age: 26,
// };
// user.location; // returns undefined

// const message = "Hello World!";

// message.toLowerCase();
// // Calling 'message'
// message();
