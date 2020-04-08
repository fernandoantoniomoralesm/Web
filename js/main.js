/* EJECUTAR LA FUNCION JQERY UNA VEZ QUE TODOS LOS ELEMENTOS HTML ESTEN CARGADOS */
$(Document).ready(function(){
    $('.menu li:has(ul)').click(function(e){
        e.prevenDefault(); /* al dar clic a la opcion no cambia la url */

        /* PARA DESPLEGAR EL MENU */
        if($(this).hasClass('activado')){ /* si el elemento que fue clickeado tiene la clase activado */
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();
        }else{
            $('.menu li ul').slideUp(); /* se ocultaran todos los submenus */
            $('.menu li').removeClass('activado'); /* se les quitara la clase activado */
            $(this).addClass('activado'); /* se les agregara la clase activado al elemento que fue clickeado */
            $(this).children('ul').slideDown();/*mostrara todos los elementos hijos del elemento que fue clickeado */
        }

        $('.menu li ul li a').click(function(){
            window.location.href=$(this).attr("href");
        })

    });
});