import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User("1", "ion", "ion@ion.com", 22);
user.doarme(7);
user.mananca(200);
console.log(user);
user.nume = "Dan";
// user.varsta = -23;
 user.varsta= -25;
// console.log(user);
// user.#email = 'dan@dan.ro';
console.log(user)
