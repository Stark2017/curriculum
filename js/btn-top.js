let btnTop = document.getElementById("btn-top");

function detectarScroll() {
    //console.log("Vertical: " + window.scrollY);
    let coordenadasY = window.scrollY;
    setTimeout(() => {
        if (coordenadasY > 600) {
            btnTop.classList.remove("close");
        } else{
            btnTop.classList.add("close");
        }
    }, 1000);
  };

window.addEventListener("scroll", detectarScroll)

