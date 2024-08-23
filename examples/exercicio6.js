// Desafio 6: Removendo uma Propriedade

// Descrição: Remova a propriedade cor do objeto carro.
// Em seguida, exiba o objeto atualizado no console para verificar se a propriedade foi removida.




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

delete carro.cor