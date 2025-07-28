/* 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */

let diaDeLaSemana = prompt("¿Qué día de la semana es?");
if (diaDeLaSemana === "Sabado" || diaDeLaSemana === "Domingo") {
  alert("¡Buen fin de semana!")
}
  else{
    alert ("¡Buena semana!")}

/* 2.Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. */

let numero = prompt("Escribe un número positivo o negativo");
if (numero > 0) {
  alert("El número es positivo");
} else if (numero < 0) {
  alert("El número es negativo");
} else if (numero == 0) {
  alert("El número es cero");
}

/* 3.Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra 
"¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.". */

let puntuación = prompt("Ingresa tu puntación");
if (puntuación >= 100) {
  alert("¡Felicidades, has ganado!");
}
if (puntuación < 100) {
  alert("Intentalo nuevamente para ganar");
}

/* 4.Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template
 string para incluir el valor del saldo.*/

 let nombreDeUsario = prompt("Ingresa tu nombre de usuario");
let saldo = 15000;

alert(`Hola ${nombreDeUsario} Tu saldo actual es: $ ${saldo}`);

/* 5.Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una 
alerta de bienvenida usando ese nombre */

let nombreDeUsuario = prompt("Ingresa tu nombre de usuario");
let Pais = "Colombia";
alert(`Bienvenido/a ${nombreDeUsuario} a ${Pais}`);
