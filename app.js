let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabra = ' vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt('Ingrese un numero entre 1 y 10');
    /*
Este codigo realiza la comparacion entre el numero secreto y el numero que el usuario ingreso
*/
    if (numeroSecreto == numeroUsuario) {
        //Codigo que se ejecuta si la condicion es verdadera
        console.log('Adivinaste el numero secreto');
        alert(`Adivinaste el numero secreto ${numeroSecreto}. Intentaste ${intentos +  palabra}`);
    } else {
        //Codigo que se ejecuta si la condicion es falsa
        if (numeroUsuario < numeroSecreto) {
            alert('El numero que ingresaste es menor al numero secreto');
        } else {
            alert('El numero que ingresaste es mayor al numero secreto');
        }
        intentos++;
        palabra = ' veces'
    }
}
