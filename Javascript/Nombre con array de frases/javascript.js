function yoSoy(){
    var soy = document.getElementById("soy");
    var nombre = "Pedro";
    var opciones = ["programador","joven", "youtuber"]
    var numeroAleatorio = Math.floor(Math.random() * 3);
    soy.textContent = nombre + " es " + opciones[numeroAleatorio];

}