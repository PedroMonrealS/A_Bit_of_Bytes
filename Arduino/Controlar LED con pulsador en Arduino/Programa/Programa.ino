int pos = 0; // Declaramos la posición como variable global

void setup() {
  pinMode(2, OUTPUT);        // Inicializamos el pin 2 como salida
  pinMode(3, INPUT_PULLUP);  // Inicializamos el pin 3 como entrada con resistencia pull-up interna
}

void loop() {
  if (digitalRead(3) == LOW) {
    delay(50); // Evitar fallos
    if (digitalRead(3) == LOW) { // Volver a verificar
      pos = !pos; // Alternamos el valor de pos
      while (digitalRead(3) == LOW); // Esperamos a que se suelte el botón
    }
  }

  digitalWrite(2, pos); // Encendemos o apagamos el LED según el valor de pos
}
