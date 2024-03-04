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
}

window.onload = onIniciar();
