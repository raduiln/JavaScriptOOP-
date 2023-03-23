class Student{
    nota1=7
    nota2=9
    constructor(id, nume, varsta, nota1, nota2, media){
        this.id=id;
        this.nume=nume;
        this.varsta=varsta;
        this.nota1=nota1;
        this.nota2=nota2;
        this.media=media;
    }
    salut(){
        console.log(`Buna ziua ${nume}`)
    }
    examen(){
        console.log(`nota la primul examen este ${nota1}`)
    }
    calMedia(){
        console.log(`media este egala cu (${nota1} + ${nota2})/2`);
    }
}