var number1 = 0;
var number2 = 0;


function timeout() {
    var texto1 = document.getElementById("texto1");
    setTimeout(function(){
        texto1.textContent = number1;
        number1++;

    }, 1000);
}

function interval() {
    var texto2 = document.getElementById("texto2");
    setInterval(function(){
        texto2.textContent = number2;
        number2++;
    }, 1000);
}