import styleMenu from "../css/menu-component.css" assert { type: 'css'};
import styleGrid from "../css/grid-menu-component.css" assert { type: 'css'};

class Menu extends HTMLElement{
    constructor(){
        super();

        // inicio el attachShadow para poder utilizar el obj ShadowRoot, que es la nueva "Ruta Sombra"
        this.attachShadow({mode: "open"})

        // Creando el nav
        this.nav = document.createElement("nav");
        this.div = document.createElement("div");

        this.img = document.createElement("img");
        this.img.src = "./img/icon-leon.png";
        this.img.alt = "imagen de icono";
        this.div.appendChild(this.img);

        this.ul = document.createElement("ul");

        const a_href = ["#presentacion", "#sobre-mi", "#exp-edu", "#portafolio", "#contact"]
        const nombreList = ["PRESENTACIÓN", "SOBRE MÍ", "EXPERIENCIA", "PORTAFOLIO", "CONTACTO"];
        
        for (let i = 0; i < nombreList.length; i++) {
            this.li = document.createElement("li")
            this.a = document.createElement("a");
            
            this.a.href = a_href[i];
            this.a.innerHTML = nombreList[i];

            this.li.appendChild(this.a)
            this.ul.appendChild(this.li)
        }

        // Creo el button X, puedo agregar un addEventListener
        this.btnHamburguesa = document.createElement("button");
        this.btnHamburguesa.id = "btn-hamburguesa";
        this.btnHamburguesa.type = "button";
        this.btnHamburguesa.innerHTML = "☰";
        this.btnHamburguesa.addEventListener("click", (event)=>{
            this.toggleAttribute("open")
        })

        this.nav.append(this.div, this.ul);

        // Agrego al ShadowRoot el nav
        this.shadowRoot.append(this.nav, this.btnHamburguesa);
    }
    connectedCallback(){
        // le asigno los estilos css al shadow root
        this.shadowRoot.adoptedStyleSheets = [styleMenu, styleGrid];
    }
    
}
customElements.define("componente-menu", Menu);