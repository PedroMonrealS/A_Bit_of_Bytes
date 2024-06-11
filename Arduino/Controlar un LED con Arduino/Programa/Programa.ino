void setup() {
pinMode(2, OUTPUT); //Inicializamos el pin 2 como salida
}

void loop() {
digitalWrite(2, HIGH); //Encendemos el pin 2
delay(1000);
digitalWrite(2, LOW); //Apagamos el pin 2
delay(1000);
}
