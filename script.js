const login = document.getElementById("login");
const menu=document.getElementById("menuLogin");
const cerrar=document.getElementById("cerrar");
const universos= document.getElementById("universos1");
const universoBoton=document.getElementById("universoMenu")
const cerrarUniverso=document.getElementById("cerrarUniverso")

function loginMenu(){
    menu.style.display="block";
    login.classList.add("white");
    menu.style.position="absolute";
    menu.style.top="90px";
    universos.style.display="none";
    universoBoton.classList.remove("white");
       
}

login.addEventListener("click", function(){
loginMenu();
});




function cerrarb(){
    menu.style.display="none";
    
    login.classList.remove("white");
    
       
}

cerrar.addEventListener("click", function(){
cerrarb();
});


function abrirUniverso(){
    universos.style.display="block";
    universos.style.position="absolute";
    menu.style.display="none";
    universoBoton.classList.add("white");
    login.classList.remove("white");

    
       
}

universoBoton.addEventListener("click", function(){
    abrirUniverso();
});

function CerrarUniverso(){
    universos.style.display="none";
    universoBoton.classList.remove("white");

    
    
       
}

cerrarUniverso.addEventListener("click", function(){
    CerrarUniverso();
});




