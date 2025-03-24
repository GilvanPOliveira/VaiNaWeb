const curiosidades = [
  "A palavra 'Natal' vem do latim 'natalis', que significa 'nascimento'.",
  "A tradição da árvore de Natal começou na Alemanha no século XVI.",
  "O Papai Noel moderno foi inspirado em São Nicolau, um bispo que ajudava os pobres.",
  "No Brasil, o Natal é comemorado no verão, diferente da maioria dos países que celebram no inverno.",
  "A música 'Noite Feliz' foi escrita originalmente em alemão em 1818.",
  "As cores tradicionais do Natal — vermelho, verde e dourado — simbolizam vida, esperança e luz.",
  "O panetone surgiu na Itália e se popularizou como um doce natalino em todo o mundo.",
  "Em algumas culturas, os presentes só são abertos no dia 6 de janeiro, Dia de Reis.",
  "O maior presente de Natal da história foi a Estátua da Liberdade, dada pela França aos EUA em 1886.",
  "Renas do Papai Noel originalmente eram todas machos nas histórias antigas, mas hoje são vistas como fêmeas com chifres!",
];

const linkCuriosidade = document.querySelector('a[href="#curiosidade"]');
const textoCuriosidade = document.getElementById("texto-curiosidade");
const globoArvore = document.getElementById("globoArvore");

function trocarCuriosidade() {
  textoCuriosidade.style.opacity = "0"; 

  setTimeout(() => {
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    textoCuriosidade.textContent = curiosidades[indiceAleatorio];
    textoCuriosidade.style.opacity = "1"; 
  }, 500);
}

linkCuriosidade.addEventListener("click", (event) => {
  event.preventDefault();
  trocarCuriosidade();
  document.getElementById("curiosidade").scrollIntoView({ behavior: "smooth" });
});

globoArvore.addEventListener("click", () => {
  trocarCuriosidade();
});
