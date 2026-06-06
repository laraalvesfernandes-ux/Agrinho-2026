const secoes = document.querySelectorAll("section");

function revelar() {

    secoes.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {

            secao.classList.add("aparecer");

        }

    });

}

window.addEventListener("scroll", revelar);

revelar();

window.addEventListener("scroll", () => {

    const tomate =
    document.getElementById("tomateViajante");

    const scroll =
    window.scrollY;

    const limite = 450;

    const movimento =
    Math.min(scroll * 0.15, limite);

    tomate.style.transform =
    `translateY(${movimento}px)
    rotate(${scroll * 0.03}deg)`;

});