// Clase 06

// Funciones de Orden Superior

// function operarNumeros(a, b, operacion) {
//     return operacion(a, b);
// }

// const operarNumeros = (a, b, operacion) => operacion(a, b);

// const suma = (x, y) => x + y;
// const resta = (x, y) => x - y;
// const multiplicacion = (x, y) => x * y;
// const division = (x, y) => {
//     if (y === 0) {
//         return "Error: No se puede dividir por Cero";
//     }
//     return x / y;
// }

// console.log(operarNumeros(5, 52, suma));
// console.log(operarNumeros(5, 52, resta));
// console.log(operarNumeros(5, 52, multiplicacion));
// console.log(operarNumeros(5, 52, division));
// console.log(operarNumeros(5, 0, division));


// Arrays

// const myArray = [1, 2, 3]; 



// // myArray = 4;
// // console.log(myArray);

// myArray.push(4);
// console.log(myArray);
// console.log(myArray[2]);
// console.log(myArray.length);

// const stringArray = ["Hola", "Mundo"];
// stringArray.push("Coder"); // Se agrega al final
// stringArray.push("JavaScript");
// console.log(stringArray);
// console.log(stringArray.sort());




// const myArray = [1, 2, 3, 5, -10, 9, 0, 9, -10, 100, 80, 0]; 
// console.log(myArray);
// console.log(myArray);
// myArray.forEach((num) => {
//     console.log(num);
// })

// myArray.forEach((num, i) => {
//     console.log(`Para el Indice: ${i}, el número es: ${num}`);
// })

// myArray.forEach((num, i , array) => {
//     array[i] = num * 2;
// })

// console.log(myArray);

// const stringArray = ["Hola", "Mundo", "Coder"];
// const inventario = {};

// stringArray.forEach((palabra, indice) => {
//     inventario[indice] = palabra;
// })

// console.log(inventario);

// filter

// const cursos = [
//     {nombre: "JavaScript", precio: 190000},
//     {nombre: "React", precio: 170000},
//     {nombre: "Angular", precio: 175000},
//     {nombre: "SQL", precio: 120000},
//     {nombre: "BackEnd", precio: 360000},
// ]

// console.log(cursos);

// const cursosEconomicos = cursos.filter((curso) => curso.precio < 175000);
// const cursosCaros = cursos.filter((curso) => curso.precio >= 175000);
// console.log(cursosEconomicos);
// console.log(cursosCaros);

// const myArray = [1, 2, 3, 5, -10, 9, 0, 9, -10, 100, 80, 0]; 

// const myArrayFiltrado = myArray.filter((num) => num > 10);
// console.log(myArrayFiltrado);


// Map

// const frutas = ["Banana", "Anana", "Pera", "Manzana", "Mandarina"];

// const frutasMayuscula = frutas.map((fruta) => fruta.toUpperCase());
// console.log(frutas);
// console.log(frutasMayuscula);


// const myArray = [1, 2, 3, 5, -10, 9, 0, 9, -10, 100, 80, 0]; 
// const myArrayDuplicado = myArray.map((num) => num * 2);
// console.log(myArrayDuplicado);

// const cursos = [
//     {nombre: "JavaScript", precio: 190000},
//     {nombre: "React", precio: 170000},
//     {nombre: "Angular", precio: 175000},
//     {nombre: "SQL", precio: 120000},
//     {nombre: "BackEnd", precio: 360000},
// ]

// console.log(cursos);

// const nombreDeCusrsos = cursos.map((curso) => curso.nombre);

// const preciosDeCusrsos = cursos.map((curso) => curso.precio);

// console.log(nombreDeCusrsos);
// console.log(preciosDeCusrsos);


// const booleanos = [true , true, false, true , false, false , false, true];
// console.log(booleanos);

// const booleanoATexto = booleanos.map((valor) => {
//     if(valor) {
//         return "Verdadero"
//     } else {
//         return "Falso"
//     }
// })
// console.log(booleanoATexto);

// const productos = [
//     {id: 1, nombre: "Azucar", precio: 1800, disponible: true},
//     {id: 2, nombre: "Yerba", precio: 1980, disponible: true},
//     {id: 3, nombre: "Cafe", precio: 3600, disponible: false},
//     {id: 4, nombre: "Coca Cola", precio: 1400, disponible: true},
//     {id: 5, nombre: "Pepsi", precio: 1350, disponible: false},
//     {id: 6, nombre: "Harina", precio: 900, disponible: true},
// ]

// const stock = productos.map((producto) => {
//     let disponibilidad = "";
//     if(producto.disponible){
//         disponibilidad = "Tiene Stock"
//     } else {
//         disponibilidad = "Sin Stock"
//     }

//     return `El Producto ${producto.nombre} ${disponibilidad} - Valor. $${producto.precio}.-`
// })

// console.log(stock);


// Reduce
// const myArray = [1, 2, 3, 5, -10, 9, 0, 9, -10, 100, 80, 0]; 

// const sumaDeElementosDeMyArray = myArray.reduce((acumulador, numero) => acumulador + numero, 0);

// console.log(sumaDeElementosDeMyArray);


// const cursos = [
//     {nombre: "JavaScript", precio: 190000},
//     {nombre: "React", precio: 170000},
//     {nombre: "Angular", precio: 175000},
//     {nombre: "SQL", precio: 120000},
//     {nombre: "BackEnd", precio: 360000},
// ]

// const cursosObjeto = cursos.reduce((acc, curso) =>{
//     acc[curso.nombre] = curso.precio
//     return acc
// }, {});

// console.log(cursos)
// console.log(cursosObjeto)


// const frutas = ["Banana", "Anana", "Banana", "Banana", "Pera", "Manzana", "Mandarina", "Pera", "Mandarina"];

// const frutasNuevo = frutas.reduce((acc, fruta) => {
//     acc[fruta] = (acc[fruta] || 0) + 1
//     return acc;
// }, {})

// console.log(frutasNuevo);


// const carrito = [
//     {id: 1, nombre: "Azucar", precio: 1800, disponible: true, cantidad: 18},
//     {id: 2, nombre: "Yerba", precio: 1980, disponible: true, cantidad: 54},
//     {id: 3, nombre: "Cafe", precio: 3600, disponible: false, cantidad: 12},
//     {id: 4, nombre: "Coca Cola", precio: 1400, disponible: true, cantidad: 10},
//     {id: 5, nombre: "Pepsi", precio: 1350, disponible: false, cantidad: 33},
//     {id: 6, nombre: "Harina", precio: 900, disponible: true, cantidad: 51},
// ]
// // console.log(carrito);
// const resumenCarrito = carrito.reduce((acc, item) => {
//     if(acc[item.nombre]){
//         acc[item.nombre].cantidad += item.cantidad
//     } else {
//         acc[item.nombre] = {
//             id: item.id,
//             nombre: item.nombre,
//             cantidad: item.cantidad
//         }
//     }
//     return acc;
// }, {})

// console.log(resumenCarrito);
