let miImagen = document.querySelector("img")

miImagen.onclick = () => {

    let miSrc = miImagen.getAttribute('src')

    if(miSrc === 'img/demon.png'){
        miImagen.setAttribute("src", "img/demon2.png")
        console.log("Img 1")
    }else{
        miImagen.setAttribute("src", "img/demon.png")
        console.log("Img 2")
    }
}

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if(!miNombre){
        estableceNombreUsuario()
    }else{
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Folk: " + miNombre;
    }
  
  }

  if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Folk: " + nombreAlmacenado;
  }

  miBoton.onclick = function () {
    estableceNombreUsuario();
  };