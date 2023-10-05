// 1- Crie uma classe Pessoa com os atributos nome, idade e email.

class Pessoa {
    nome: string;
    idade: number;
    email: string;
}

// 2 - Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.

class Aluno extends Pessoa{
    matricula: number;
}

// 3 - Crie uma classe Retangulo com os atributos largura e altura 
//     e métodos para calcular a área e o perímetro.

class Retangulo {
    largura: number;
    altura: number;

    calcularPerimetro(largura: number,altura:number){
        console.log(`O perímetro do retângulo é = ${2*(largura + altura)}`)
    }
}

// 4 - Crie uma classe Círculo com o atributo raio e métodos para calcular 
//     a área e a circunferência.

class Circulo {
    raio: number;

    calcularArea(){
        console.log(`A área do círculo é = ${3.14 * this.raio * this.raio}`);
    }
}

// 5 - Crie uma classe ContaBancaria com os atributos saldo e numeroConta e 
//     métodos para depositar, sacar e verificar o saldo.

class ContaBancaria {
    saldo: number;
    numeroConta: number;

    depositar(valor:number){
        this.saldo += valor
    }
    sacar(valor:number){
        this.saldo -= valor
    }
    verificarSaldo(){
        console.log(`seu saldo é: ${this.saldo}`)
    }
}

// 6 - Crie uma classe Produto com os atributos nome, preco e quantidade e métodos 
//     para calcular o valor total (preço * quantidade).

class Produto{
    nome: string;
    preco: number;
    qtd: number;

    calculoValor(){
        console.log(`${this.nome} > valor total = ${this.preco * this.qtd}`)
    }
}

// 7 - Crie uma classe Triangulo com os atributos lado1, lado2 e lado3 e 
//     um método para verificar se é um triângulo válido

class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    verificarValidade(){
        if(this.lado1 + this.lado2 > this.lado3 ||
           this.lado3 + this.lado2 > this.lado1 ||
           this.lado1 + this.lado3 > this.lado2 ){
            console.log("pode formar um triângulo");
        }else{
            console.log("Não forma um triângulo"); 
        }
    }
}

// 8- Crie uma classe Livro com os atributos titulo, autor e anoPublicacao e 
//    um método para exibir informações do livro.

class Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;

    exibirInfo(){
        console.log(` Título: ${this.titulo}
        autor: ${this.autor}
        ano de publicação: ${this.anoPublicacao}`); 
    }
}

// 9 - Crie uma classe Agenda que permite adicionar, listar e 
//     remover contatos (nomes e números de telefone).

let agenda:Array<Agenda>;

class Agenda{
    nome: string;
    numero: number;

    constructor(nome:string, numero:number){
        this.nome = nome;
        this.numero = numero
    }
    addContato(){
        agenda.push(this)
    }
    listarContatos(){
        for(let i = 0; i<= agenda.length; i++){
            console.log(i);  
        }
    }
    removerContato(i:number){
        agenda.splice(i,1)
    }
}

// 10 - Crie uma classe CarroEsportivo que herda da classe Carro (usada no exemplo anterior) 
//      e tenha métodos adicionais para acelerar rapidamente e produzir um som esportivo.

class Carro{
   
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  
  acelerar() {
    console.log("Acelerando o carro...");
  }

}

class CarroEsportivo extends Carro {

    acelerarRapidamente() {
        console.log("Acelerando o carro rapidamente...");
      }

    produzirSom(){
        console.log("vruuuuumm....");
        
    }
}