class Carte {
  static reducere=10;
  constructor(titlu, autor, editura, anAparitie, pret, nrPagini) {
    this.titlu = titlu;
    this.autor = autor;
    this.editura = editura;
    this.anAparitie = anAparitie;
    this.pret = pret;
    this.nrPagini = nrPagini;
  }
  info(){
    console.log(`Titlul este ${this.titlu}, autor ${this.autor}`)
  }
  descchideCartea(pagina) {
    console.log(`Am deschis cartea la pagina${pagina}`);
  }
  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  modificaPret(pretNou) {
    if (pretNou < 100 && pretNou > this.pret) {
      this.pret = pretNou;
    }
    // this.pret=this.pret-(procent/100*this.pret);
  }
  reducere(procent) {
    this.pret -= (procent * this.pret) / 100;
    console.log(`Pretul cu reducere este ${this.pret}`);
    
  }
}

const carte = new Carte("Poezii", "M. Eminescu", "All", 2010, 50, 110);
carte.modificaPret(75);

console.log(carte);
//  curs 2moduule
// export

