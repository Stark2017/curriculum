import Styles from "./boton-top.css" assert { type: 'css'};
class Boton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.botonTop = document.createElement("button");
        this.botonTop.type = "button";
        this.botonTop.classList = "close";
        this.botonTop.id = "btn-top";

        this.a = document.createElement("a");
        this.a.href = "#presentacion";
        this.a.innerHTML = "⬆";

        // Mostrar/Ocultar el botón
        window.addEventListener("scroll", (event) => {
            this.coordenadasY = window.scrollY;
            //console.log(this.coordenadasY)
            setTimeout(() => {
                if (this.coordenadasY > 600) {
                    this.botonTop.classList.remove("close")
                } else {
                    this.botonTop.classList.add("close")
                }
            }, 1000);
        })


        this.botonTop.appendChild(this.a);
        this.shadowRoot.appendChild(this.botonTop);
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets = [Styles]
    }
    attributeChangeCallback() {

    }
}

customElements.define("component-boton-top", Boton);
