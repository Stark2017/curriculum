let observador,
    options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: .2
    }

// Este efecto se lo va a aplicar a todas las entradas que detecte el observador
let efectoDesplazamiento = (entradas, observador) => {
    entradas.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("visible");
        }
    });
}

observador = new IntersectionObserver(efectoDesplazamiento, options)

let headerH2 = document.getElementById("presentacion").children[0],
    headerP = document.getElementById("presentacion").children[1],
    headerButton = document.getElementById("presentacion").children[2];

observador.observe(headerH2);
observador.observe(headerP);
observador.observe(headerButton);



let sobreMih2 = document.getElementById("sobre-mi").children[0],
    sobreMiSpan = document.getElementById("sobre-mi").children[1],
    sobreMiP = document.getElementById("sobre-mi").children[2],
    sobreMiDivHerramientas = document.getElementById("sobre-mi").children[3];

observador.observe(sobreMih2);
observador.observe(sobreMiSpan);
observador.observe(sobreMiP);
observador.observe(sobreMiDivHerramientas);


let expEduH2 = document.getElementById("exp-edu").children[0],
    divExp = document.getElementById("div-exp"),
    divEdu = document.getElementById("div-edu");

observador.observe(expEduH2);
observador.observe(divExp);
observador.observe(divEdu);

let portafolioProyect1 = document.getElementById("Proyect1"),
    portafolioProyect2 = document.getElementById("Proyect2"),
    portafolioProyect3 = document.getElementById("Proyect3"),
    portafolioProyect4 = document.getElementById("Proyect4"),
    portafolioProyect5 = document.getElementById("Proyect5"),
    portafolioProyect6 = document.getElementById("Proyect6"),
    portafolioH2 = document.getElementById("portafolio").children[0];

observador.observe(portafolioH2);
observador.observe(portafolioProyect1);
observador.observe(portafolioProyect2);
observador.observe(portafolioProyect3);
observador.observe(portafolioProyect4);
observador.observe(portafolioProyect5);
observador.observe(portafolioProyect6);

let contactH2 = document.getElementById("contact").children[0],
    contactFotoPerfil = document.getElementById("algo"),
    contactTelMail = document.getElementById("div-tel-mail"),
    contactRedesSociales = document.getElementById("div-redes-sociales");

observador.observe(contactH2);
observador.observe(contactFotoPerfil);
observador.observe(contactTelMail);
observador.observe(contactRedesSociales);