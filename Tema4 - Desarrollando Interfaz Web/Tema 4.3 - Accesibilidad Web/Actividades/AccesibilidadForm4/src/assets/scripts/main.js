

function onIniciar() {
  console.log("Hola Mundo");

  // CODIGO DEL TAB
  // 1º es conseguir todas las pestañas aka los botones
  // 2º conseguir todos los bloques de texto
  const botonesTab = document.querySelectorAll(".botonesTab__pestana");
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");


  // 3º Sería añadir un eventListener de click a todos los botones
  botonesTab.forEach((boton, i) => {

    boton.addEventListener("click", () => {
      console.log("Click en boton " + i);

      // RECORRER TODOS LOS BOTONES Y QUITAR CLASE ACTIVO
      // Le quitamos la clase activo al resto de botones
      botonesTab.forEach((botonFE, j) => {
        botonFE.classList.remove("activo")
        bloquesTexto[j].classList.remove("activo")
      })

      // Y le ponemos activo al boton AL QUE LE HEMOS HECHO CLICK
      boton.classList.add("activo");
      bloquesTexto[i].classList.add("activo")
    })
  })

  // CÓDIGO DEL ACORDEON
  // 1º Seleccionamos los nodos en cuestión. Los nodos que vamos a tratar
  // h2Titulo va a tener un eventListener de click
  const h2Titulo = document.querySelectorAll(".divContenedor__titulo")
  // pContenido es al que vamos a modificarle las clases css... la classList
  const pContenido = document.querySelectorAll(".divContenedor__contenido");

  h2Titulo.forEach((nodo, i) => {

    nodo.addEventListener("click", () => {

      // Si el pContenido tiene la clase css divContenedor__contenido--activo, la quitamos
      if (pContenido[i].classList.contains("divContenedor__contenido--activo")) {
        pContenido[i].classList.remove("divContenedor__contenido--activo");
      } else { // y si no, la añadimos
        pContenido[i].classList.add("divContenedor__contenido--activo");
      }
    })
  })

  // CÓDIGO DEL LIGHTBOX
  // 1º Seleccionamos el nodo al que queremos añadir evento click
  const imagenes = document.querySelectorAll(".div-img__img");
  // Seleccionamos también el nodo al que cambiar la clase activo
  const divLightbox = document.querySelector(".main__ligthbox-proyecto-selected");
  const imgLigthbox = document.querySelector(".div-img__img--lightbox");

  imagenes.forEach((cadaImagen, i) => {
    cadaImagen.addEventListener("click", () => {
      // Podemos ver por pantalla que cadaImagen.src es el atributo src del nodo img... es decir... la ruta de la imagen
      console.log(cadaImagen.src); // Cada nodo es cada imagen del lightbox, es decir, las imagenes en pequeño

      // Añadimos la clase activo al divLightbox
      divLightbox.classList.add("activo"); // divLightbox es el div con position fixed que se abre al hacer click en el nodo (divImg)
      // Le ponemos, al atributo src de la img del lightbox (la grande) el src de la imagen a la que se le ha hecho click
      imgLigthbox.setAttribute("src", cadaImagen.src);
    });
  });

  // Ya sólo queda dale funcionalidad al boton cerrar
  const botonCerrar = document.querySelector(".ligthbox-proyecto-selected__boton")
  botonCerrar.addEventListener("click", () => {
    divLightbox.classList.remove("activo");
  })


  // Código de carrusel
  // Seleccionamos el nodo con clase carrousel__grande
  const divCarrouselGrande = document.querySelector(".carrousel__grande")
  // debemos de añadir una funcionalidad click a los botones ... tenemos que seleccionar todos los botones
  const botones = document.querySelectorAll(".botones__boton")

  // Una vez seleccionados los nodos, añadimos el eventListener a TODOS los botones
  botones.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      console.log(`Ha sido pulsado el boton nº ${i}`)

      botones.forEach((botonQuitar) => {
        botonQuitar.classList.remove("activo");
      });
      boton.classList.add("activo")

      let calculoPx = i * -50;
      console.log(`Click en ${i}, cálculo = ${calculoPx}`);

      divCarrouselGrande.style.transform = `translateX(${calculoPx}%)`;

    });
  });
}


window.onload = onIniciar();
