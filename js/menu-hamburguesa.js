let btnHamburguesa = document.getElementById("btn-hamburguesa"),
btnCerrar = document.getElementById("btn-x"),
navPrincipal = document.getElementById("nav-principal");

function open(){
    navPrincipal.classList.add("open");
}

function close(){
    navPrincipal.classList.remove("open");
}

btnHamburguesa.addEventListener("click", open)
btnCerrar.addEventListener("click", close)
navPrincipal.addEventListener("click", close)


let scrollPosition = 0;
window.addEventListener('scroll', function(){
    if ((document.body.getBoundingClientRect()).top > scrollPosition) {
        // Si scrolleo hacia arriba, muestro el btn
        btnHamburguesa.classList.remove("close")
    } else {
        // si Scrolleo hacia abajo, oculto el btn
        scrollPosition = (document.body.getBoundingClientRect()).top;
        btnHamburguesa.classList.add("close")
    }
});
