function onIniciar() {
  
  const botonesTab = document.querySelectorAll(".botonesTab__pestana");
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");

  botonesTab.forEach ( (boton, i) => {
    boton.addEventListener(  "click", ()=>{
      console.log("Click en boton " + i)

      

      boton.classList.add ("activo")
    })
  })

}


window.onload = onIniciar();
