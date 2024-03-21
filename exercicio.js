/*
01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite';
*/
        
let dia = 'dia';
if (dia === 'dia') {
  console.log('claro');
} else {
  console.log('de noite');
}

/*
02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log();
*/
        
for (let i = 2; 
i <= 20; i += 2) {
  console.log(i);
}

/*
03 - crie uma função que exiba uma mensagem no console;
*/
        
function exibirMensagem() {
  console.log('Esta é uma mensagem exibida no console por uma função.');
}
exibirMensagem();

/*
04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console;
*/
        
function exibirNome(nome) {
  console.log(nome);
}
exibirNome('Gilvan');

/*
05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console;
*/
        
function exibirInfo(nome, idade, estiloMusical) {
  console.log(`Nome: ${nome}, Idade: ${idade}, Estilo Musical: ${estiloMusical}`);
}
exibirInfo('Gilvan', 32, 'Rock');

/*
06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console;
*/
        
function exibirFilmeMusica(filme, musica) {
  console.log(`Filme: ${filme}, Música: ${musica}`);
}
exibirFilmeMusica('Matrix', 'Bohemian Rhapsody');

/*
07 - crie uma função que retorne o triplo do número recebido no parâmetro da função;
*/
        
function triploDoNumero(numero) {
  return numero * 3;
}
console.log(triploDoNumero(6));

/*
08 - crie uma função que  verifique se uma  variável é true ou false;
*/
        
function verificarBoolean(valor) {
  if (valor) {
    console.log('A variável é verdadeira(true).');  
  } else {
    console.log('A variável é falsa(false).');
  }
}
verificarBoolean(true);

/*
09 - Crie um array que receba 5 itens e exiba no console;
*/
        
let array = ["João", "Maria", "Jose", "Pedro", "Ana"];
console.log(array);

/*
10 - Utilize um método para adicionar um nome ao inicio do array;
*/
        
array.unshift('Carlos');
console.log(array);

/*
11 - Utilize um método para remover o último nome do array;
*/
        
array.pop();
console.log(array);

/*
12 - Utilize um método para adicionar dois nomes ao fim do array;
*/
        
array.push("Lucas", "Paulo");
console.log(array);

/*
13 - Utilize um método para remover o primeiro nome do array;
*/
        
array.shift();
console.log(array);

/*
14 - Utilize um método para adicionar no meio deste array:
  let nome = ["João",  "Maria",  "Jose",  "Pedro"];
*/
let nome = ["João",  "Maria",  "Jose",  "Pedro"];
nome.splice(2, 0, "Ricardo");
console.log(nome);

/*
15 - Utilize um método para organizar em ordem crescente o seguinte array:  
  let numbers = [7,5,6,3,8,9,2,1,4].
*/
        
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);
