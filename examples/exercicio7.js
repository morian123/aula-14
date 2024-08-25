// Desafio: Manipulando Dados em JSON
// Descrição: Você recebeu uma string no formato JSON representando uma lista de alunos e suas notas.
// Seu objetivo é converter essa string em um objeto JavaScript,
// calcular a média de notas de cada aluno, e exibir o nome do aluno com a maior média.

const jsonString = `
[
  {"nome": "Morian", "notas": [8, 9, 7]},
  {"nome": "Breno", "notas": [6, 7, 8]},
  {"nome": "Wallace", "notas": [9, 9, 10]}
]
`;

const alunos = JSON.parse(jsonString);

let alunoComMaiorMedia = null;
let maiorMedia = -Infinity;

alunos.forEach(aluno => {
  const { nome, notas } = aluno;
  const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
  const media = somaNotas / notas.length;

  if (media > maiorMedia) {
    maiorMedia = media;
    alunoComMaiorMedia = aluno;
  }
});

if (alunoComMaiorMedia) {
  console.log(`O aluno com a maior média é ${alunoComMaiorMedia.nome} com média ${maiorMedia.toFixed(2)}`);
} else {
  console.log("Não foi possível determinar o aluno com a maior média.");
}

 