// 1- Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!"
//    no console quando for chamada.

function saudacao(): void {
    console.log("Olá mundo");
}
saudacao()

// 2- Escreva uma função chamada dobro que aceite um parâmetro num e 
//    exiba o dobro desse número no console.

function dobro(num: number): string | number {
    return `o dobro de ${num} é ${num * 2}`
}
console.log(dobro(3));

// 3- Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. 
//    Essa função deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive) no console.

function mostrarNumeros(inicio: number, fim: number): void {
    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }
}
mostrarNumeros(6, 9)

// 4- Escreva uma função chamada verificarPar que aceite um número como entrada e exiba no
//    console se o número é par ou não.

function verificarPar(num: number): void {
    if (num % 2 == 0) {
        console.log("é par");
    } else {
        console.log("é impar");
    }
}

verificarPar(9)

// 5- Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada 
//    elemento desse array no console, um por um.

function imprimirLista(lista: Array<string>): void {

    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}
imprimirLista(["arroz", "feijão", "sal", "amendoim"])

// 6- Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e 
//    calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o 
//    valor da média.

function calcularMedia(notas: Array<number>): number {
    let soma: number = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    return soma / notas.length
}
console.log(calcularMedia([10, 8, 7]));


// 7- Crie uma função chamada maiorNumero que receba um array de números como parâmetro e exiba 
//    o maior número presente no array no console.

function maiorNumero(lista: Array<number>): void {
    let maior: number = lista[0]

    for (let i = 0; i <= lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    }
    console.log(`O maior número é ${maior}`);
}

maiorNumero([-2, -9, -8, -100])

// 8- Escreva uma função chamada contarVogais que aceite uma string como parâmetro e conte quantas 
//    vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.

function contarVogais(palavra: string): void {
    let contar: number = 0
    palavra = palavra.toLowerCase();

    for (let i = 0; i <= palavra.length; i++) {
        if (palavra.charAt(i) == 'a' || palavra.charAt(i) == 'e' || palavra.charAt(i) == 'i' || palavra.charAt(i) == 'o' || palavra.charAt(i) == 'u'){
            contar ++
        }
    }
    console.log(`número de vogais: ${contar}`)
}
contarVogais("Odara")

// 9- Crie uma função chamada imprimirTabuada que aceite um número como entrada e exiba a tabuada 
//    desse número de 1 a 10 no console.

function imprimirTabuada(num: number): void{
    console.log(`Tabuada de ${num}`)
    for(let i =1; i<=10 ;i++){
        console.log(`${num} X ${i} = ${num * i}`)
    }
}
imprimirTabuada(5);

// 10- Escreva uma função chamada verificarPrimo que receba um número como parâmetro e exiba no 
//     console se o número é primo ou não.

function verificarPrimo(numero:number): void{
    let teste = 0;
    for(let i=1; i<=numero;i++){
        if(numero %i == 0){
            teste++
        }
    }
    if(teste == 2){
        console.log(`${numero} é primo`)
    }else{
        console.log(`${numero} não é primo`)
    }
}
verificarPrimo(6)

// 11- Crie uma função chamada saudacao2 que aceita um parâmetro nome para uma pessoa 
//     e exiba no console a saudação "Olá, [nome]!" utilizando um valor padrão para nome 
//     caso nenhum seja fornecido.

function saudacao2(nome: string ='Cliente'): void{
    console.log(`Olá ${nome}`)
}
saudacao2()
saudacao2("Odara")

// 12 - Escreva uma função chamada calculadora que receba dois números (num1 e num2) e um 
//      operador matemático (operacao) como parâmetros. A função deve realizar a operação 
//      matemática entre num1 e num2 (por exemplo, adição, subtração, multiplicação, divisão) 
//      com um valor padrão de operação sendo "+".

function calculadora(num1:number, num2:number, operador:string = "+"): void{
    switch(operador){
        case "+": console.log(num1 + num2);
        break;
        case "-": console.log(num1 - num2);
        break;
        case "/": console.log(num1 / num2);
        break;
        case "*": console.log(num1 * num2);
        break;
        default: console.log("escolha um operador válido");
    }
}
calculadora(10,3)
calculadora(10,3,'*')

// 13 - Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio 
//      para iniciar a contagem regressiva. A função deve exibir no console uma contagem 
//      regressiva a partir do número fornecido até 1, utilizando um valor padrão de início 
//      igual a 10.

function contagemRegressiva(inicio: number = 10): void{
    for(let i = inicio; i <= 1; i --){
        console.log(i) // arrumar o loop
    }
}
contagemRegressiva(5);