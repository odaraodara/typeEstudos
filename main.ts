// funções Typescript - sem retorno e sem parâmetro

function funcao01(): void {
console.log("minha primeira função")
}
funcao01()

// funções Typescript - com retorno e sem parâmetro

function funcao02(): string {
    return "minha segunda função"
} 
console.log(funcao02());

// funções Typescript - sem retorno e com parâmetro

function funcao03(nome: string): void{
    console.log(`Bom dia ${nome}`);
}
funcao03("Odara")

// funções Typescript - com retorno e com parâmetro
function funcao04(num1:number, num2:number): number{
    return num1 + num2
}
console.log(funcao04(10,3));
