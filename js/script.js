// let verdadero = true;
// console.log(typeof verdadero); // Tipo de dato


// Estructtura de un if
// if(condicion){ // si condicion es true, entonces se  ejecuta esto!
//     ejecuta esto!
// }

// if (verdadero) {
//     console.log("El valor de verdad de verdadero es " + verdadero);
// } else {
//     console.log("El valor de verdad de verdadero es " + verdadero + " se ejecuto desde el else");
// }

// let stock = false;

// if (stock) {
//     console.log("Usted puede comprar");
// } else {
//     console.log("No hay mas Stock");
// }

// let edad = parseInt(prompt("Ingrese su Edad, No mienta.!!"));

// const edadDeReferencia = 18;

// if (edad >= edadDeReferencia){
//     console.log("Usted puede Pasar... Bienvenido!!");
// } else {
//     console.error("MENOR DE EDAD.!!! Usted NO puede Pasar... ");
// }

// let numero = parseInt(prompt("Ingrese un Número cualquiera.!!"));
// console.log(numero);

// if (numero > 0) {
//     alert("Usted ingreso un numero positivo");
// } else if (numero < 0) {
//     alert("Usted ingreso un numero negativo");
// } else if (numero === 0) {
//     alert("Usted ingreso el Cero");
// } else if (isNaN(numero)){
//     alert("ERROR, Ingrese un Número Válido, no escriba un Texto")
// } else {
//     alert("ERROR, no ha ingresado Nada.!")
// }

// let numeroA = 12; // Number
// let numeroB = "12"; // String

// if ( numeroA == numeroB ) {
//     console.log("Ambos numeros son Iguales.!!");
// } else {
//     console.error("Los numeros son Distintos.!!");
// }

// if ( numeroA === numeroB ) {
//     console.log("Ambos numeros son Estrictamente Iguales.!!");
// } else {
//     console.error("Los numeros son Estrictamente Distintos.!!");
// }

// let numeroA = 1;
// let numeroB = 10;

// let numero = parseInt(prompt("Ingrese un numero cualquiera"));

// // Si el numero esta entre numeroA y numeroB
// if (numero > numeroA && numero < numeroB) {
//     console.log("El numero ingresado esta entre " + numeroA + " y " + numeroB);
// }


// let verdadero = false;

// if (!verdadero) { // Porque la negacion de el false es el true
//     console.log("Verdadero es Falso");
// }

// Ciclos
// Ciclo por condicion

// while

// let nombreDelUsuario = prompt("Ingrese su nombre");

// // Necesito validar que el Usuario ingrese un String
// console.log(nombreDelUsuario);

// while(nombreDelUsuario === '' || !isNaN(nombreDelUsuario)) {
//     alert("Ingrese un Nombre valido");
//     nombreDelUsuario = prompt("Ingrese su nombre");
// }
// alert("Su Nombre es: " + nombreDelUsuario);




// let nombreDelUsuario;
// let validacion;

// do {
//     nombreDelUsuario = prompt("Ingrese su nombre");
//     validacion = nombreDelUsuario === '' || !isNaN(nombreDelUsuario); // es boolean

//     if(validacion){
//         alert("Ingrese un Nombre valido");
//     }
// } while (validacion);

// alert("Su Nombre es: " + nombreDelUsuario);

// Ciclos por conteo

// Ciclo for

// for (let i = 0; i < 5; i++) {
//     console.log("Me estoy ejecutando " + (i + 1) + " veces.!");
// }


// Tabla de Verdad (logica proposiocional)

// const V = true;
// const F = false;

// console.log("Tabla de Verdad del Operador && (Y)");
// console.log(V && V); // Si ambos son V => true
// console.log(V && F); // Si al menos uno de los valores es F => false
// console.log(F && V); // Si al menos uno de los valores es F => false
// console.log(F && F); // Si ambos de los valores son F => false


// console.log("Tabla de Verdad del Operador || (O)");
// console.log(V || V); // Si ambos son V => true
// console.log(V || F); // Si al menos uno de los valores es V => true
// console.log(F || V); // Si al menos uno de los valores es V => true
// console.log(F || F); // Si ambos de los valores son F => false

// console.log("Tabla de Verdad del Operador de Negación (!)");
// console.log(!V); // Si no es Verdadero => false
// console.log(!F); // Si no es False => true

//39. Pide al usuario que ingrese su mes de nacimiento y muestra su 
//    signo zodiacal en la consola.

let mes;
do {
    mes = parseInt(prompt("Ingrese su mes de Nacimiento (1-12)"));
    if (isNaN(mes) || mes < 1 || mes > 12) {
        alert("Por favor, ingrese un Número del 1 al 12");
    }

} while (isNaN(mes) || mes < 1 || mes > 12);

switch (mes) {
    case 1:
        console.log("Tu signo sodiacal es Capricornio o Acuario");
        break;
    case 2:
        console.log("Tu signo sodiacal es Acuario o Pisis");
        break;
    case 3:
        console.log("Tu signo sodiacal es Pisis o Aries");
        break;
    case 4:
        console.log("Tu signo sodiacal es Aries o Tauro");
        break;
    case 5:
        console.log("Tu signo sodiacal es Tauro o Géminis");
        break;
    case 6:
        console.log("Tu signo sodiacal es Géminis o Cáncer");
        break;
    case 7:
        console.log("Tu signo sodiacal es Cáncer o Leo");
        break;
    case 8:
        console.log("Tu signo sodiacal es Leo o Virgo");
        break;
    case 9:
        console.log("Tu signo sodiacal es Virgo o Libra");
        break;
    case 10:
        console.log("Tu signo sodiacal es Libra o Escorpio");
        break;
    case 11:
        console.log("Tu signo sodiacal es Escorpio o Sagitario");
        break;
    case 12:
        console.log("Tu signo sodiacal es Sagitario o Capricornio");
        break;
    default:
        console.log("Por favor, ingrese un numero valido del 1 al 12");
}