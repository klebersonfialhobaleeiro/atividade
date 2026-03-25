const input = document.querySelector("input");
const botao = document.querySelector("button");
const lista = document.querySelector("ul");

botao.addEventListener("click", () => {

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite algo!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);

    input.value = "";
});