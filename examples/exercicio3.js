// Desafio 3: Função Dentro de um Objeto


const carro = new Object()
    carro.marca= "ferrari",
    carro.modelo= "SF90 SPIDER",
    carro.ano= 2022

    carro.descrever= function(){
        console.log(`este carro é um ${this.modelo}, é do ano de ${this.ano} e é da marca ${this.marca}`)
    }
    carro.ano= 2023;
    carro.cor= "azul";

    carro.descrever();
// Descrição: Adicione uma função chamada descrever dentro do objeto carro que
// retorne uma string descrevendo o carro, por exemplo,
// "Este carro é um [marca] [modelo] do ano [ano] na cor [cor].".
// Chame essa função e exiba o resultado no console.
