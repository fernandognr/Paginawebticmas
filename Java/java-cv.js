//Muestra y oculta la pestaña de Datos Generales
function Leermasdatosgenerales(){
    var puntos=document.getElementById("datosgenerales");
    var vermas=document.getElementById("dato1");
    var boton=document.getElementById("boton");
    if (puntos.style.display ==="none"){   
        puntos.style.display = "inline";
        vermas.style.display = "none";
        boton.innerHTML = "Mostrar Datos Generales";
    }else{
        puntos.style.display = "none";
        vermas.style.display = "inline";
        boton.innerHTML = "Ocultar Datos Generales";
    }
}
//Muestra y oculta la pestaña de Formacion Academica
function Leermasformacionacademica(){
    var puntos=document.getElementById("Formacionacademica");
    var vermas=document.getElementById("dato2");
    var boton=document.getElementById("boton2");
    if (puntos.style.display ==="none"){   
        puntos.style.display = "inline";
        vermas.style.display = "none";
        boton.innerHTML = "Mostrar Formacion Academica";
    }else{
        puntos.style.display = "none";
        vermas.style.display = "inline";
        boton.innerHTML = "Ocultar Formacion Academica";
    }
}
//Muestra y oculta la pestaña de Experiencia laboral 
function Leermasexperiencialaboral(){
    var puntos=document.getElementById("Experiencialaboral");
    var vermas=document.getElementById("dato3");
    var boton=document.getElementById("boton3");
    if (puntos.style.display ==="none"){   
        puntos.style.display = "inline";
        vermas.style.display = "none";
        boton.innerHTML = "Mostrar Experiencia Laboral";
    }else{
        puntos.style.display = "none";
        vermas.style.display = "inline";
        boton.innerHTML = "Ocultar Experiencia Laboral";
    }
}
