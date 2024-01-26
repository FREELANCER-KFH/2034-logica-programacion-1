// Desafio 1

console.log('Bienvenidos al desafio de la unidad 4.');

// Desafio 2

let nombre = 'Kevin Feliz Henriquez'
console.log(`!hola ${nombre}!`);

// Desafio 3

alert(`!hola ${nombre}!`);

// Desafio 4

let encuesta = prompt('¿Cual es el lenguaje de programacion que mas te gusta?');
console.log(`Tu lenguaje favorito es ${encuesta}`);

// Desafio 5

let valor1 = 3
let valor2 = 5
resultado = valor1 + valor2
console.log(`El resultado de la suma es ${resultado}`);

// Desafio 6
resultado = valor1 - valor2
console.log(`El resultado de la resta es ${resultado}`);

// Desafio 7
let edad = prompt('¿Cual es tu edad?');
if (edad >= 18) {
    console.log('Usted es mayor de edad');
} else {
    console.log('Usted es menor de edad');
}

// Desafio 8
let numero = prompt('Ingrese un numero');
if (numero < 0) {
    console.log('El numero es negativo');
} else {
    console.log('El numero es positivo');
}

// Desafio 9

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Desafio 10
console.log(Math.random());

// Desafio 11

console.log(Math.floor(Math.random() * 10) + 1);

// Desafio 12

console.log(Math.floor(Math.random() * 1000) + 1);