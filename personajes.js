let personajeActual = 1;
function siguientepersonaje(){
    if(personajeActual == 3){
        personajeActual = 1;
    }else{
        personajeActual++;
    }
    document.querySelector(".personaje").src = "img/personaje" + personajeActual + ".png";
    var sfxPersonaje = new Audio("audio/personaje.mp3");
    sfxPersonaje.play();
    document.getElementById("personaje").src = "img/personaje" + personajeActual + ".png";
}
function anteriorpersonaje(){
    if(personajeActual == 1){
        personajeActual = 3;
    }else{
        personajeActual--;
    }
    document.querySelector(".personaje").src = "img/personaje" + personajeActual + ".png";
    var sfxPersonaje = new Audio("audio/personaje.mp3");
    sfxPersonaje.play();
    document.getElementById("personaje").src = "img/personaje" + personajeActual + ".png";
}
