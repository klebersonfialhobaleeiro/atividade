const botao = document.querySelector("button");
const bloco = document.querySelector(".bloco");

botao.addEventListener("click", () => {
    bloco.classList.toggle("ativo");
});