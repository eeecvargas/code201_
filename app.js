// Crear un puntaje:
let score = 0;

function preguntaUno() {
  console.log("Pregunta 1");
}

function preguntaDos() {
  console.log("Pregunta 2");
}

// 4 oportunidades para responder esta pregunta, sino, le doy la respuesta.
// usamos while:
function preguntaSeis() {
  let deporte;
  let attempts = 0;

  while (deporte != 3 && attempts < 5) {
    correcto="Sí, espero es un futuro practicar varios deportes :)";
    deporte = prompt("Cuántos deportes me gustaría practicar?");
    ///attempts++;
    if (deporte < 3) {
      console.log("Demasiado bajo. Pista: Número de colores en la bandera de México");
      alert("Demasiado bajo. Pista: Número de colores en la bandera de México");
    } else if (deporte > 3) {
      console.log("Mmm. Demasiado alto. Me gustaría practicar esa cantidad de deportes, pero está por encima de lo que te tengo pensado...");
      alert("Mmm. Demasiado alto. Me gustaría practicar esa cantidad de deportes, pero está por encima de lo que te tengo pensado...");
    } else {
      console.log(correcto);
      alert(correcto);
      score++;
    }
    attempts++; // ESTO nos ayuda a prevenirr EL INFINITO.
  }
  console.log("Me gustaría practicar 3.");

}



function juegoAdivinanzas() {
    const pregunta = "¿Cuál es un color primario? ";
    const respuestasCorrectas = ["rojo", "azul", "amarillo"];

    let intentosRestantes = 6;

    while (intentosRestantes > 0) {
        let respuestaUsuario = prompt(pregunta);
        if (respuestasCorrectas.includes(respuestaUsuario.toLowerCase())) {
            alert("Y sí, es correctoOoo!");
            score++;
            return; // Termina el juego si la respuesta es correcta
        } else {
            intentosRestantes = intentosRestantes - 1;
            alert(`Incorrecto. Uno de ellos simboliza el amor. Vamos, tú puedes. Te quedan ${intentosRestantes} intentos :p`);
        }
    }
    
    alert(" Se acabaron los intentos :/ Lo siento. Fin del juego :P. Por si te quedaste con la duda, estas son las respueas: rojo, amarillo, azul.");
}

    
preguntaUno();
preguntaDos();
// 3, 4, 5

preguntaSeis();
juegoAdivinanzas();
console.log("Tu score es:  ${score}");
alert("Tu score es ${score} ");

preguntaSiete();
/*
const puntaje={
    pregunta6: 0,
    pregunta7: 0,
}

function preguntaSeis(){
    if (deporte==3) {
        puntaje.pregunta6++;
    }
}
function juegoAdivinanzas(){
    if (respuestaUsuario=respuestasCorrectas){
        puntaje.pregunta7++;
    }

}

function obtenerPuntajeTotal() {
    // Sumar los puntajes de todas las preguntas
    let puntajeTotal = 0;
    for (const pregunta in puntaje) {
      puntajeTotal += puntaje[pregunta];
    }
    return puntajeTotal;
}
alert(`¡Felicidades! Tu puntuación final es: ${obtenerPuntajeTotal()}`);*/