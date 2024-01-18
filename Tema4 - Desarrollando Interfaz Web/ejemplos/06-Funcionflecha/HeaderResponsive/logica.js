/*
 * Teniendo una bara de navegación 
 * <header class="header">
 *  <div class="titulo"/>
 *   <nav class="nav_texto"/>
 *   <nav class="nav_hamburguer"/>
 *    ...
 *    ...
 * 
*/



const onWindowResized = () => {
    console.log("Pantalla Redimensionada")
    cambiarDiseno();
};

window.onresize = onWindowResized

const cambiarDiseno = () => {
    const navTexto = document.querySelector("header .header__zonaNavegacion")
    const navHamburguer = document.querySelector("header .header__zonaNavegacionHamb")

    if (!navTexto.getAttribute("hidden")) {
        console.log("Mostrar nav Hamburguer")
        navTexto.setAttribute("hidden", true)
        navTexto.setAttribute("display", "none")
        navHamburguer.removeAttribute("hidden")
    }

    

};