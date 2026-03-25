const botao = document.querySelector("button");
const titulo = document.querySelector("h1");
const paragrafo = document.querySelector("p");

botao.addEventListener("click", () => {
    titulo.textContent = "Novo título alterado!";
    paragrafo.textContent = "Parágrafo modificado com JavaScript.";
});