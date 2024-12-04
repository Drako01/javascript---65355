// Funciones

// const numeroA = 10;
// const numeroB = 12;

// const resultado = numeroA + numeroB;
// console.log("Felicitaciones, el resultado es " + resultado);


// const numeroC = 1025;
// const numeroD = 412;

// const resultado1 = numeroC + numeroD;
// console.log("Felicitaciones, el resultado es " + resultado1);

// const numeroC1 = 1335;
// const numeroD1 = 4912;

// const resultado11 = numeroC1 + numeroD1;
// console.log("Felicitaciones, el resultado es " + resultado11);

/// Declarar la Funcion

// Variables Globales
// const numeroA = parseInt(prompt("Ingrese el 1er Numero"));
// const numeroB = parseInt(prompt("Ingrese el 2do Numero"));
// const resultado = numeroA + numeroB;

// function sumar() {
//     // Variables Locales
//     const numeroA = parseInt(prompt("Ingrese el 1er Numero"));
//     const numeroB = parseInt(prompt("Ingrese el 2do Numero"));
//     const resultado = numeroA + numeroB;

//     console.log("Felicitaciones, el resultado de la Suma es " + resultado);
// }

// // for(let i = 0; i < 5; i++){
// //     sumar();
// // }

// function restar() {
//     // Variables Locales
//     const numeroA = parseInt(prompt("Ingrese el 1er Numero"));
//     const numeroB = parseInt(prompt("Ingrese el 2do Numero"));
//     const resultado = numeroA - numeroB;

//     console.log("Felicitaciones, el resultado de la Resta es " + resultado);
// }
// function multiplicar() {
//     // Variables Locales
//     const numeroA = parseInt(prompt("Ingrese el 1er Numero"));
//     const numeroB = parseInt(prompt("Ingrese el 2do Numero"));
//     const resultado = numeroA * numeroB;

//     console.log("Felicitaciones, el resultado de la Multiplicacion es " + resultado);
// }

// function dividir() {
//     // Variables Locales
//     const numeroA = parseInt(prompt("Ingrese el 1er Numero"));
//     const numeroB = parseInt(prompt("Ingrese el 2do Numero"));
//     const resultado = numeroA / numeroB;
//     if(numeroB !== 0 ) {
//         console.log("Felicitaciones, el resultado la Division es " + resultado);
//     } else {
//         console.error("Error, No se puede dividir por 0");
//     }
// }

// /// Invocacion de las Funciones
// sumar();
// restar();
// multiplicar();
// dividir();

// Funciones con parametros

// Variables Globales
// let numeroA = parseFloat(prompt("Ingrese el 1er Numero"));
// let numeroB = parseFloat(prompt("Ingrese el 2do Numero"));
//let operacion = prompt("Ingrese la Operacion: (+, -, * , /)");


// function validarResultado(p) { // retorna un Booleano
//     if (isNaN(p)) {
//         console.error("Error, Ingrese un numero valido");
//         return false;
//     } else {
//         return true;
//     }
// }

// function sumar(a, b){ // a y b son los parametros de la funcion
//     resultado = a + b;
//     console.log("Felicitaciones, el resultado de la Suma es " + resultado);
// }
// function restar(a, b){ // a y b son los parametros de la funcion
//     resultado = a - b;
//     console.log("Felicitaciones, el resultado de la Resta es " + resultado);
// }
// function multiplicar(a, b){ // a y b son los parametros de la funcion
//     resultado = a * b;
//     console.log("Felicitaciones, el resultado de la Multiplicacion es " + resultado);
// }
// function dividir(a, b){ // a y b son los parametros de la funcion
//     if(b === 0) {
//         console.error("Error, No se puede dividir por 0");
//     } else {
//         resultado = a / b;
//         console.log("Felicitaciones, el resultado de la Division es " + resultado);
//     }
// }

// if(validarResultado(numeroA) && validarResultado(numeroB)){
//     dividir(numeroA, numeroB); // Paso los Argumentos
// } else {
//     console.error("Error, Operacion cancelada debido a entradas invalidas.!")
// }


// function calculadora(a, b, operacion) {

//     if (validarResultado(a) && validarResultado(b)) {
//         let resultado;
//         switch (operacion) {
//             case "+":
//                 resultado = a + b;
//                 console.log("Felicitaciones, el resultado de la Suma es " + resultado);
//                 break;
//             case "-":
//                 resultado = a - b;
//                 console.log("Felicitaciones, el resultado de la Resta es " + resultado);
//                 break;
//             case "*":
//                 resultado = a * b;
//                 console.log("Felicitaciones, el resultado de la Multiplicacion es " + resultado);
//                 break;
//             case "/":
//                 if (b === 0) {
//                     console.error("Error, No se puede dividir por 0");
//                 } else {
//                     resultado = a / b;
//                     console.log("Felicitaciones, el resultado de la Division es " + resultado);
//                 }
//                 break;
//             default:
//                 console.error("Error, Operacion no valida.!")
//         }

//     } else {
//         console.error("Error, Operacion cancelada debido a entradas invalidas.!")
//     }
// }

// calculadora(numeroA, numeroB, operacion);



// let numeroA = parseFloat(prompt("Ingrese el 1er Numero"));
// let numeroB = parseFloat(prompt("Ingrese el 2do Numero"));

// function sumar(a, b) {
//     return console.log("Felicitaciones, el resultado de la Suma es " + (a + b)); // String
// }

// function sumar(a, b){
//     return a + b; // Numero
// }
// console.log(sumar(numeroA, numeroB));


// const sumar = function (a , b) {
//     return a + b;
// }

// console.log(sumar(numeroA, numeroB));

// const saludo = function(nombre){
//     return "Hola " + nombre + ", como estas?";
// }

// console.log(saludo("Alejandro"));

// Funciones Flecha (Retorno implisito)
// const sumar = (a, b) => {
//     return a + b;
// }
// const sumar = (a, b) => {
//     const resultado = a + b 
//     console.log(resultado)
// }; // (Retorno implisito)

// sumar(10, 12);

// const sumar = (a, b) => a + b; // (Retorno implisito)

// console.log(sumar(10, 12));





// calculadora(numeroA, numeroB, operacion);

let continuar;

do {
    let numeroA = parseFloat(prompt("Ingrese el 1er Numero"));
    let numeroB = parseFloat(prompt("Ingrese el 2do Numero"));
    let operacion = prompt("Ingrese la Operacion: (+, -, * , /)");

    function validarResultado(p) { // retorna un Booleano
        if (isNaN(p)) {
            console.error("Error, Ingrese un numero valido");
            return false;
        } else {
            return true;
        }
    }

    function calculadora(a, b, operacion) {

        if (validarResultado(a) && validarResultado(b)) {
            let resultado;
            switch (operacion) {
                case "+":
                    resultado = a + b;
                    console.log("Felicitaciones, el resultado de la Suma es " + resultado);
                    break;
                case "-":
                    resultado = a - b;
                    console.log("Felicitaciones, el resultado de la Resta es " + resultado);
                    break;
                case "*":
                    resultado = a * b;
                    console.log("Felicitaciones, el resultado de la Multiplicacion es " + resultado);
                    break;
                case "/":
                    if (b === 0) {
                        console.error("Error, No se puede dividir por 0");
                    } else {
                        resultado = a / b;
                        console.log("Felicitaciones, el resultado de la Division es " + resultado);
                    }
                    break;
                default:
                    console.error("Error, Operacion no valida.!")
            }

        } else {
            console.error("Error, Operacion cancelada debido a entradas invalidas.!")
        }
    }

    calculadora(numeroA, numeroB, operacion);

    
//     do {
//         continuar = prompt("Desea continuar (s/n)").toLowerCase();
//         if(continuar !== 's' && continuar !== 'n'){
//             console.error("Error, Entrada no valida. Por favor ingrese 's' o 'n'");
//         }

//     } while (continuar !== 's' && continuar !== 'n');
    
// } while (continuar === "s");

    continuar = confirm("Desea realizar otra Operacion?")
} while (continuar);

console.log("Gracias por usar la calculadora");

