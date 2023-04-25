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





