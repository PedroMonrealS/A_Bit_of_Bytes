function efecto() {
    for(i = 1; i < 6; i++){

        var diva = document.getElementById(i);
        diva.style.width = "200px";
        setTimeout(espera, 4000);

    }
}

function espera(){
  setTimeout(regreso, 4000);

}
function regreso() {
    for(i = 1; i < 6; i++){

        var diva = document.getElementById(i);
        diva.style.width = "1000px";
    }
}


function espera(){
  setTimeout(regreso, 4000);

}