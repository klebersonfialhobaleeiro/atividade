const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {
        cards.forEach(c => {
            c.classList.remove("destaque");
        });
        card.classList.add("destaque");
    });

});