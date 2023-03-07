let headerH2 = document.getElementById("presentacion").children[0],
headerP = document.getElementById("presentacion").children[1],
headerButton = document.getElementById("presentacion").children[2];

let observador,
options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: .4
}

// Este efecto se lo va a aplicar a todas las entradas que detecte el observador
let efectoDesplazamiento = (entradas, observador)=> {
    entradas.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("visible");
        } else{
            element.target.classList.remove("visible");
        }
    });
}

observador = new IntersectionObserver(efectoDesplazamiento, options)

observador.observe(headerH2);
observador.observe(headerP);
observador.observe(headerButton);