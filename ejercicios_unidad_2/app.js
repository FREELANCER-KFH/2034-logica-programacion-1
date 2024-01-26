// Desafio 1

let dia = prompt("Ingrese un dia de la semana");

if (dia === 'Sabado' || dia === 'Domingo') {
    alert('!Buen fin de semana!');
} else {    
    alert('!Buena semana!');
}

// Desafio 2

let numero = prompt("Ingrese un numero");

if (numero < 0) {
    alert('El numero es negativo');
} else {
    alert('El numero es positivo');
}

// Desafio 3

let puntuacion = prompt("Ingrese una puntuacion");

if (puntuacion >= 100){
    alert('!Felicidades, has ganado!');
} else {
    alert('!Intenta nuevamente para ganar!');
}

// Desafio 4
let saldoCuenta = prompt("Ingrese su saldo actual");

console.log(`El saldo actual en su cuenta es: $${saldoCuenta}`);
alert(`El saldo actual en su cuenta es: $${saldoCuenta}`);

// Desafio 5

let nombre = prompt("Ingrese su nombre");

alert(`Bienvenido/a ${nombre}`);