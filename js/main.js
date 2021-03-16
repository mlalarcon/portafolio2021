function contActive(){
    var selector = document.getElementById("cont-color");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgamarillo(){
    var selector = document.getElementById("body");
    selector.classList.toggle("amarillo");
}

function bgverde(){
    var selector = document.getElementById("body");
    selector.classList.toggle("verde");
}

function bgrojo(){
    var selector = document.getElementById("body");
    selector.classList.toggle("rojo");
}

function bgazul(){
    var selector = document.getElementById("body");
    selector.classList.toggle("azul");
}

function bgnaranja(){
    var selector = document.getElementById("body");
    selector.classList.toggle("naranja");
}

AOS.init();