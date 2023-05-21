window.addEventListener("load", function(){
    window.location.href = "#";
})

// Animar

var animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado.length; i++){
        let alturaAnimado = animado[i].offsetTop
        if(alturaAnimado - 700 < scrollTop){
            animado[i].style.opacity= 1;
            if(i==0 || i==1 || i==4 || i==5 || i==8 || i==9 ){
                animado[i].classList.add("animar");
            }else if(i==2 || i==3 || i==6 || i==7 || i==10 || i==11 ){
                animado[i].classList.add("animarL");
            }
            
        }
    }
}
    window.addEventListener('scroll',mostrarScroll)      


   


window.onscroll = function() {
    var y = window.scrollY;
    if (y<50){
        for(i=0; i<animado.length; i++){
            animado[i].style.opacity= 0;
            if(i==0 || i==1 || i==4 || i==5 || i==8 || i==9 ){
                animado[i].classList.remove("animar");
            }else if(i==2 || i==3 || i==6 || i==7 || i==10 || i==11 ){
                animado[i].classList.remove("animarL");
            }
        }
        
    }
  };


// filtro js

$(document).ready(function () {
    $(".filtro-item").click(function(){

        const value= $(this).attr("data-filter");
        if(value == "all"){
            $(".post-caja").show("1000")
        }
        else{
            $(".post-caja").not("." + value).hide("1000")
            $(".post-caja").filter("." + value).show("1000")
        }
    });

// activar btn js
    $(".filtro-item").click(function(){
        $(this).addClass("activar-filtro").siblings().removeClass("activar-filtro");
    })

});

// Cambio de header con el scroll

let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

// Cambio de color busqueda
var f = document.getElementById("F")
var f1 = document.getElementById("F1")
var f2 = document.getElementById("F2")
var f3 = document.getElementById("F3")
var f4 = document.getElementById("F4")

f.addEventListener("click", function(){
    
    f.classList.toggle("animate__heartBeat");
    
})

f1.addEventListener("click", function(){
   
    f1.classList.toggle("animate__heartBeat");
    
})

f2.addEventListener("click", function(){
    
    f2.classList.toggle("animate__heartBeat");
})


f3.addEventListener("click", function(){
    
    f3.classList.toggle("animate__heartBeat");
    
})


f4.addEventListener("click", function(){
    
    f4.classList.toggle("animate__heartBeat");
})



// funcion cambiar fondo
/*
var fondo =document.getElementById("inicio");
var numero = 1;
var indentificador;

function fondoCambiante(){
    indentificador = setInterval(CambiarFondo, 3000)
}

function CambiarFondo (){
    if (numero <= 6){
        fondo.style.background="url(img/bg"+numero+".jpg)";
        fondo.style.transition="background-image 2s ease";
        fondo.style.backgroundSize="cover";
       
        numero++;
    }else(
        numero = 1
    )
}
fondoCambiante()
*/



// animacion 

var titulo = document.getElementById("titulo")

titulo.addEventListener("mouseover", function(){
    titulo.classList.toggle("animate__bounce");
})

titulo.addEventListener("click", function(){
    titulo.classList.toggle("animate__hinge");
})

