class User {
  _varsta;//protected
  #email; //privat
  constructor(id, nume, email, varsta) {
    //setam proprietatile
    this.id = id;
    this.nume = nume;
    this.#emailemail = email;
    this._varsta = varsta;
  }
// get email(){
//     console.log('sunt in getter email')
//     return this.#email;
// }
// set email(newEmail=='dan@dan.ro'){
//     console.log('sunt in setter email');
//     if(newEmail=='dan@dan.ro){
//         this.email=newEmail;
//     }
// else {trow 'error:invalid email';}

// }

//   get myAge() {
//     return this._varsta;
//   }
//   set myAge(varstaNoua) {
//     if (varstaNoua > 0) {
//       this._varsta = varstaNoua;
//     } else {
//       throw "Error: invalid data";
//       // console.log('Error')
//     }
//   }
//   mananca(claorii) {
//     console.log(`Mananca ${claorii} calorii pe zi.`);
//   }
//   doarme(ore) {
//     console.log(`Doarme ${ore} ore pe zi`);
//   }
}
export { User };
