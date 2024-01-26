let numeroSecreto = Math.floor(Math.random() * 10) + 1
let numeroUsuario = 0;
let intentos = 1;
//let palabra = ' vez';
let maximosIntentos = 3;

alert('Bienvenido al juego de adivinar el numero secreto');
alert('Tienes 3 intentos para adivinar el numero secreto');

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt('Ingrese un numero entre 1 y 10'));
    console.log(typeof numeroUsuario);
    /*
Este codigo realiza la comparacion entre el numero secreto y el numero que el usuario ingreso
*/
    if (numeroSecreto == numeroUsuario) {
        //Codigo que se ejecuta si la condicion es verdadera
        console.log('Adivinaste el numero secreto');
        alert(`Adivinaste el numero secreto ${numeroSecreto}. Intentaste ${intentos} ${intentos > 1 ? 'veces' : 'vez'}`);
    } else {
        //Codigo que se ejecuta si la condicion es falsa
        if (numeroUsuario < numeroSecreto) {
            alert('El numero que ingresaste es menor al numero secreto');
        } else {
            alert('El numero que ingresaste es mayor al numero secreto');
        }
        intentos++;
        if (intentos > maximosIntentos) {
            alert(`Llegaste al maximo numero de intentos que son ${maximosIntentos}. El numero secreto era ${numeroSecreto}`);
            break;
        }
    }
}
