export class Annunci {

    nome : string;
    numero : string;
    msg: string;
    commento : string[] = []
    like : number;


    constructor(nome : string, numero : string, msg : string ){
        this.nome = nome; 
        this.numero = numero; 
        this.msg = msg;
        this.like = 0;
    }
}