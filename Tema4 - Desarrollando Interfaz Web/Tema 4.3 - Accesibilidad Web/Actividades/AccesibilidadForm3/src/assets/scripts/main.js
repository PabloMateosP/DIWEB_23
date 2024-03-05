function onIniciar() {
  
  const botonesTab = document.querySelectorAll(".botonesTab__pestana");
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");

  botonesTab.forEach ( (boton, i) => {
    boton.addEventListener(  "click", ()=>{
      console.log("Click en boton " + i)

      botonesTab.forEach((botonFE, j)=> {
        botonFE.classList.remove("activo");
        bloquesTexto[j].classList.remove("activo");
      });

      boton.classList.add("activo");
      bloquesTexto[i].classList.add("activo");
    });
  });

  // CÓDIGO DEL ACORDEON 
  const h2Titulo = document.querySelectorAll(".divContenedor__titulo");
  const pContenido = document.querySelectorAll(".divContenedor__contenido");

  console.log(h2Titulo);

  h2Titulo.forEach((nodo, i)=> {

    console.log("Nodo: ", nodo);

    nodo.addEventListener("click",  ()=> {
      
      if (pContenido[i].classList.contains("divContenedor__contenido--activo") ) {
        pContenido[i].classList.remove('divContenedor__contenido--activo'); 
      } else {
        pContenido[i].classList.add('divContenedor__contenido--activo');
      }
    })
  })

}

window.onload = onIniciar();
