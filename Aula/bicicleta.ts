import { produto } from "./produto";

export class bicicleta extends produto {
    constructor(public cor: string, preco: number, qnt:number){
        super(preco,qnt)
        this.cor = cor
        }

        mostrarCor(){
            console.log(`produto: Bicicleta ${this.cor}`); 
        }
}


