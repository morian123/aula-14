// Desafio 4: Iterando sobre as Propriedades
// Descrição: Crie uma função que receba um objeto como parâmetro e itere sobre suas propriedades,


const carro = new Object()
carro.marca = "ferrari",
    carro.modelo = "SF90 SPIDER",
    carro.ano = 2022

carro.descrever = function () {
    console.log(`este carro é um ${this.modelo}, é do ano de ${this.ano} e é da marca ${this.marca}`)
}
carro.ano = 2023;
carro.cor = "azul";

function iterar(carro) {
    for (let chave in carro) {
        console.log(chave, carro[chave])
    }
}
iterar(carro);

// exibindo cada chave e valor no console.
// Use o objeto carro como argumento para testar a função.
