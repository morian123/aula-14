// Desafio 1: Criação de um Objeto

const carro = new Object()
    carro.marca= "ferrari"
    carro.modelo= "SF90"
    carro.ano= 2022
    

for (let chave in carro) {
    console.log(carro[chave])
}

// Descrição: Crie um objeto chamado carro com as propriedades marca, modelo e ano.
// Depois, exiba no console o valor de cada propriedade.
