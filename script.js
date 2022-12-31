// Variables

let parte1 = document.getElementById("parte1");
let parte2 = document.getElementById("parte2");
let principal = document.querySelector("body");
let header = document.querySelector("header");
let saludo = document.getElementsByClassName("bienvenido")[0];
let contenido = document.getElementsByClassName("contenido")[0];
let puntos = document.getElementsByClassName("puntos");
let selector = document.getElementsByClassName("selector")[0];
let fondo = document.getElementsByClassName("area")[0];

let [presentacion, trabajos, experiencia, tecnologias, sobreMi] = puntos;

let cajaPresentacion = document.querySelector(".caja-presentacion");
let cajaTrabajos = document.querySelector(".caja-trabajos");
let cajaExperiencia = document.querySelector(".caja-experiencia");
let cajaTecnologias = document.querySelector(".caja-tecnologias");
let cajaSobreMi = document.querySelector(".caja-sobremi");

let imagenGrande = document.querySelector(".imagen-grande");
let cerrarVentana = document.querySelector(".cerrar-ventana");
let ventanaGrande = document.querySelector(".ventana-grande");
let miniaturas = document.getElementsByClassName("imagen-fila-experiencia");

let [miniatura1, miniatura2, miniatura3, miniatura4, miniatura5, miniatura6, miniatura7, miniatura8, miniatura9, miniatura10, miniatura11, miniatura12, miniatura13, miniatura14, miniatura15] = miniaturas;


let rotacion = 0;

//Funciones

function escalar() {
    parte1.classList.add("parte1mover");
    parte2.classList.add("parte2mover");
    principal.classList.add("bodymover");
    saludo.classList.add("parrafomover");
    contenido.style.opacity = "1";
    fondo.style.background = "rgb(106, 154, 126)";
};

function borrar() {
    setInterval(() => {
        header.style.display = "none"
    }, 1500);

    setTimeout;
};

function cerrarVentanaGrande(){
    ventanaGrande.style.opacity = "0";
    ventanaGrande.style.zIndex = "0";
}



//Programa

header.addEventListener("click", escalar);

header.addEventListener("click", borrar);

presentacion.addEventListener("click", function () {
    selector.style.top = "60px";
    selector.style.width = "150px";
    selector.style.right = "25px";
    selector.style.transform = "rotate(0deg)";

    cajaPresentacion.style.opacity = "1";
    cajaTrabajos.style.opacity = "0";
    cajaExperiencia.style.opacity = "0"
    cajaTecnologias.style.opacity = "0";
    cajaSobreMi.style.opacity = "0";

    cajaPresentacion.style.zIndex = "1";
    cajaTrabajos.style.zIndex = "0";
    cajaExperiencia.style.zIndex = "0"
    cajaTecnologias.style.zIndex = "0";
    cajaSobreMi.style.zIndex = "0";

})

trabajos.addEventListener("click", function () {
    selector.style.top = "167px";
    selector.style.width = "110px";
    selector.style.right = "45px";
    selector.style.transform = "rotate(180deg)";

    cajaPresentacion.style.opacity = "0";
    cajaTrabajos.style.opacity = "1";
    cajaExperiencia.style.opacity = "0"
    cajaTecnologias.style.opacity = "0";
    cajaSobreMi.style.opacity = "0";

    cajaPresentacion.style.zIndex = "0";
    cajaTrabajos.style.zIndex = "1";
    cajaExperiencia.style.zIndex = "0"
    cajaTecnologias.style.zIndex = "0";
    cajaSobreMi.style.zIndex = "0";

})

experiencia.addEventListener("click", function () {
    selector.style.top = "276px";
    selector.style.width = "137px";
    selector.style.right = "32px";
    selector.style.transform = "rotate(360deg)";

    cajaPresentacion.style.opacity = "0";
    cajaTrabajos.style.opacity = "0";
    cajaExperiencia.style.opacity = "1"
    cajaTecnologias.style.opacity = "0";
    cajaSobreMi.style.opacity = "0";

    cajaPresentacion.style.zIndex = "1";
    cajaTrabajos.style.zIndex = "0";
    cajaExperiencia.style.zIndex = "1"
    cajaTecnologias.style.zIndex = "0";
    cajaSobreMi.style.zIndex = "0";

})

tecnologias.addEventListener("click", function () {
    selector.style.top = "382px";
    selector.style.width = "137px";
    selector.style.right = "31px";
    selector.style.transform = "rotate(540deg)";

    cajaPresentacion.style.opacity = "0";
    cajaTrabajos.style.opacity = "0";
    cajaExperiencia.style.opacity = "0"
    cajaTecnologias.style.opacity = "1";
    cajaSobreMi.style.opacity = "0";

    cajaPresentacion.style.zIndex = "0";
    cajaTrabajos.style.zIndex = "0";
    cajaExperiencia.style.zIndex = "0"
    cajaTecnologias.style.zIndex = "1";
    cajaSobreMi.style.zIndex = "0";

})

sobreMi.addEventListener("click", function () {
    selector.style.top = "492px";
    selector.style.width = "110px";
    selector.style.right = "45px";
    selector.style.transform = "rotate(720deg)";

    cajaPresentacion.style.opacity = "0";
    cajaTrabajos.style.opacity = "0";
    cajaExperiencia.style.opacity = "0"
    cajaTecnologias.style.opacity = "0";
    cajaSobreMi.style.opacity = "1";

    cajaPresentacion.style.zIndex = "0";
    cajaTrabajos.style.zIndex = "0";
    cajaExperiencia.style.zIndex = "0"
    cajaTecnologias.style.zIndex = "0";
    cajaSobreMi.style.zIndex = "1";

})



cerrarVentana.addEventListener("click", cerrarVentanaGrande);

miniatura1.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso LinkedIn.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura2.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso Foco.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura3.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso Hábitos.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura4.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso Productividad.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura5.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso Lógica de programación 1.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura6.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso Lógica de programación 2.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura7.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso Lógica de programación 3.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura8.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso HTML5 y CSS3 parte 1.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura9.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso HTML5 y CSS3 parte 2.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura10.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso HTML5 y CSS3 parte 3.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura11.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Alura/Curso HTML5 y CSS3 parte 4.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura12.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/SoloLearn/SoloLearn HTML.png">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura13.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/SoloLearn/SoloLearn CSS.png">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura14.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/SoloLearn/SoloLearn JavaScript.png">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

miniatura15.addEventListener("click", function(){
    imagenGrande.innerHTML = '<img src="imagenes-certificados/Platzi/diploma-platzi.jpg">';
    
    ventanaGrande.style.opacity = "1";
    ventanaGrande.style.zIndex = "1";
});

