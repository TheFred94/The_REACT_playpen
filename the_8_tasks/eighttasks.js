const age = 43;
const email = "jofh@kea.dk";

let isEven = age % 2 === 0 ? true : false;
console.log(isEven);

// if (age % 2 === 0) {
//   isEven = true;
//   console.log(isEven);
// } else {
//   isEven = false;
//   console.log(isEven);
// }

let role = "visitor";
{
  email === "jofh@kea.dk" && age > 40 ? (role = "admin") : (role = "visitor");
}

console.log(role);

// if (email === "jofh@kea.dk") {
//   if (age > 40) {
//     role = "admin";
//     console.log(role);
//   }
// }
//can be done in 1 line, if you merge the two if's
