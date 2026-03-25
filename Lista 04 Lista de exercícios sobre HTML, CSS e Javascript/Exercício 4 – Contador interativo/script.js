let contador = 0;

const valor = document.querySelector("#contador");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");

inc.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
});

dec.addEventListener("click", () => {

    if (contador > 0) {
        contador--;
        valor.textContent = contador;
    }

});