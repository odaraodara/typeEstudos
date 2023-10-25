export class produto{
    constructor(public preco: number, public qnt: number){
        this.preco = preco;
        this.qnt = qnt
    }

    apresentarValor(){
        console.log(`qnt: ${this.qnt} - valor final: ${this.preco * this.qnt}`);
        
    }

}