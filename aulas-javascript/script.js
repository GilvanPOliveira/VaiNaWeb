//exemplos da aula

// LOOPS

// for(variavel inicializadora; condição; iteração){
// tarefa repetitiva
// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// let num = 1
// while (num <= 5){
//   console.log(num)
//   num++
// }

// Do/While EXECUTA O LOOP PRIMEIRO E DEPOIS VERIFICA A CONDIÇÃO.
// let num = 6
// do {
//   console.log(num)
//   num++
// }while(num <= 5)

// Array

let alunos = ["Daniel", "Lucas", "Tricia", "Nay", "Henrique"];
//              0         1        2       3
console.log(alunos);

//metodo são instruções
// unshift() Adiciona no começo do array
// push() Adiciona no final do array
// pop() Remove o último
// shift()Remove o primeiro
// sort() adiciona uma ordem
// splice() remove, adiciona ou substitui um elemento específico do array
// array.splice(indice, delete, elemento)

alunos.unshift("Larissa");
console.log(alunos);

alunos.push("Henrique");
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.shift();
console.log(alunos);

// let ordem = [5,3,4,1,2,7,6,9,8]

// console.log(ordem)

// alunos.sort()
// console.log(alunos)

// alunos.splice(index, remove, adiciona)
// alunos.splice(1, 2)
// console.log(alunos)

// alunos.slice(1, 2);
// console.log(alunos.slice(0,3))


//oque é uma função? E um conjunto de instruções que executa uma tarefa.
function nomeFunção() {
  console.log("Boa tarde!!");
}

nomeFunção();

// Para execultar a função é preciso chamá-la. A função é importante para o agrupamento e reutilização
// de código.

//primeiro passo para a criação de uma função é a declaração dela. A função vai ser
//guardada na memória e vai esperar ser chamada.

function info() {
  console.log("vini");
  console.log("24");
  console.log("Salvador");
}

//segundo passo - execultar a função chamando/invocando ela
info();

// Argumentos e Parâmetros
// (parametros criados)
const informacao = function (nome, idade, cidade) {
  console.log(nome);
  console.log(idade);
  console.log(cidade);
  console.log(nome, idade, cidade);
};

informacao("Daniel", 21, "São paulo"); //(arguments/argumentos execultados)

// Variáveis dentro do parâmetro
let meuNome = "vini";

function mostraNome(nome) {
  console.log(`Meu nome e ${nome}`);
}

mostraNome(meuNome);

// Função com return
function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(soma(2));

//fazendo uma vitamina de frutas
function vitamina(fruta1, fruta2) {
  return fruta1 + fruta2;
}

const copo = vitamina("Banana", "Açaí");

console.log(copo);

// Swicth;
let comida = 3;

switch (comida) {
  case 1:
    console.log("Churrasco");
    break;
  case 2:
    console.log("Feijoada");
    break;
  case 3:
    console.log("Pizza");
    break;
  default:
    console.log("Não tem case para isso!");
}

// vamos ver na prática com uma cauculadora:
function calcular(numero1, operador, numero2) {
  let result = 0;
  switch (operador) {
    case "+":
      result = numero1 + numero2;
      break;
    case "-":
      result = numero1 - numero2;
      break;
    case "*":
      result = numero1 * numero2;
      break;
    case "/":
      result = numero1 / numero2;
      break;
    default:
      console.log("Operador invalido!");
  }

  return result;
}

console.log(calcular(2, "+", 4));

// /* Crie uma variável chamada “food”. Esta variável deve receber uma string com o nome
// de uma comida. Após, crie uma estrutura condicional switch que receba esta variável e
// que possua três casos: caso lasanha, retorne no console: “Não vendemos esta comida
// aqui”. Caso pizza, retorne: “Estamos com escassez de pizza” e caso salada, retorne:
// “Aqui está, são 3 reais”. Teste com estas três opções e verifique o console do seu
// navegador. Crie também um default , que retornará uma mensagem de erro no
// console. */

let food = "salada";

switch (food) {
  case "lasanha":
    console.log("Não vendemos esta comida aqui");
    break;
  case "pizza":
    console.log("Estamos com escassez de pizza");
    break;
  case "salada":
    console.log("Aqui está, são 3 reais");
    break;
  default:
    console.log("ERRO!");
}

//exercícios google forms

//exemplo 01
let mes = 5;
let estacao;

if (mes >= 1 && mes <= 3) {
  estacao = "Verão";
} else if (mes >= 4 && mes <= 6) {
  estacao = "Outono";
} else if (mes >= 7 && mes <= 9) {
  estacao = "Inverno";
} else {
  estacao = "Primavera";
}
console.log(estacao);

//exemplo 02
let x = 5;
let y = 10;
let maior;

if (x > y) {
  maior = x;
} else {
  maior = y;
}
console.log(maior);

//exemplo 03
let idade_votacao = 25;

if (idade_votacao < 18 && idade_votacao > 15) {
  console.log("O voto é opcional");
} else if (idade_votacao < 16) {
  console.log("Você não pode votar");
} else {
  console.log("Você é obrigado a votar");
}

//exemplo 04
let dia = 4;
let nomeDia;

if (dia == 1) {
  nomeDia = "Domingo";
} else if (dia == 2) {
  nomeDia = "Segunda-feira";
} else if (dia == 3) {
  nomeDia = "Terça-feira";
} else if (dia == 4) {
  nomeDia = "Quarta-feira";
} else if (dia == 5) {
  nomeDia = "Quinta-feira";
} else if (dia == 6) {
  nomeDia = "Sexta-feira";
} else {
  nomeDia = "Sábado";
}
console.log(nomeDia);

//exemplo 05
let posicao = "analista";
let bonus;

if (posicao == "gerente") {
  bonus = "15%";
} else if (posicao == "analista") {
  bonus = "10%";
} else {
  bonus = "5%";
}
console.log(bonus);

//exemplo 06
let idade_cinema = 15;
let classificacao;

if (idade_cinema >= 18) {
  classificacao = "+ 18anos";
} else if (idade_cinema >= 16) {
  classificacao = "+ 16 anos";
} else if (idade_cinema >= 12) {
  classificacao = "+ 12 anos";
} else {
  classificacao = "Livre";
}
console.log(classificacao);

//exemplo 07
let animal = "gato";

if (animal === "câo") {
  console.log("Au au");
} else if (animal === "gato") {
  console.log("Miau");
} else {
  console.log("Som desconhecido");
}

//exemplo 08
let day = "domingo";

if (day === "sábado" || day === "domingo") {
  console.log("Final de semana!");
} else {
  console.log("Dia da semana");
}

//exemplo 09
var age = 18;

if (age < 13) {
  console.log("Criança");
} else if (age >= 13 && age <= 19) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

//exemplo 10
let contador = 0;

while (contador < 10) {
  console.log((contador += 1));
}

//exemplo 11
let contador2 = 0;

while (contador2 < 15) {
  console.log((contador2 += 3));
}

//exemplo 12
/*  Uma pessoa decidiu ir a uma revenda comprar um perfume. Ele deseja comprar um perfume amadeirado, e a revenda possui, além de perfumes amadeirados, florais, cítrico e frutal. Utilizando uma estrutura switch/case, caso o comprador queira o floral, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere outro aroma?”. Caso seja especificado um aroma que não está disponível, retorne no console: “Não trabalhamos com este tipo de perfume aqui”. */

let AromaEscolhido = "Amadeirado";

switch (AromaEscolhido) {
  case "Amadeirado":
    console.log("Tem certeza que não prefere outro aroma?");
    break;
  case "Floral":
    console.log("Compra efetuada com sucesso");
    break;
  case "Cítrico":
  case "Frutal":
    console.log("Tem certeza que não prefere outro aroma?");
    break;
  default:
    console.log("Não trabalhamos com este tipo de perfume aqui");
}
const Escolha = AromaEscolhido === "Amadeirado";

//Ou

function tipoAroma (Aroma) {
  switch (Aroma) {
    case 'amadeirado':
      return 'Tem certeza que não prefere outro aroma?';
    case 'floral':
      return 'Compra efetuada com sucesso';
    case 'cítrico':
    case 'frutal':
      return 'Tem certeza que não prefere outro aroma?';
    default:
      return 'Não trabalhamos com este tipo de perfume aqui';
  }
}

const aromaDesejado = 'amadeirado';
const resultadoEscolha = tipoAroma(aromaDesejado);
console.log(resultadoEscolha);
