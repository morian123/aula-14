// Desafio 5: Verificando a Existência de Propriedades

// Descrição: Verifique se o objeto carro tem uma propriedade chamada preco.
// Se não tiver, adicione a propriedade com um valor de sua escolha.
// Se já existir, exiba o valor no console.


const carro = new Object()
carro.marca = "ferrari",
    carro.modelo = "SF90 SPIDER",
    carro.ano = 2022

carro.descrever = function () {
    console.log(`este carro é um ${this.modelo}, é do ano de ${this.ano} e é da marca ${this.marca}`)
}
carro.ano = 2023;
carro.cor = "azul";

if (carro.preco) {
    console.log(`esse carro vale ${carro.preco}`)}
    else{ carro.preco = 7000000
        console.log(`este é o preco unitario a vista ${carro.preco}`)
    }


