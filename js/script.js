// Arrays

const miArrayDeNumeros = [1, 2, -10, 0, 2.2, 8, -14, 0, 1, 99];

// console.log(typeof miArrayDeNumeros);

// miArrayDeNumeros = [5];
// console.log(miArrayDeNumeros);

// Los Arrays tienen sus propios metodos (funciones)
miArrayDeNumeros.push(5);
miArrayDeNumeros.push(99);
miArrayDeNumeros.push(10111);
miArrayDeNumeros.pop(); // Elimina el ultimo indice 
miArrayDeNumeros.shift(); // Elimina el 1er Elemento (No es recomendable)
miArrayDeNumeros.unshift(1); // Agrega en el Indice 0 (No es recomendable)

// console.log(miArrayDeNumeros);

// console.log(miArrayDeNumeros.length); // Me devuelve un numero entero -> Es la cantidad de elementos de mi Array
// console.log(miArrayDeNumeros[9]);
// for(let i = 0; i < miArrayDeNumeros.length; i++) {
//     console.log("En el indice: " + i + " esta el valor: " + miArrayDeNumeros[i]);
// }

// console.log(miArrayDeNumeros.join(" | "));

// console.log(miArrayDeNumeros.indexOf(8)); // Retorna un numero entero -> Indice del elemento
// console.log(miArrayDeNumeros.indexOf(2.2));
// console.log(miArrayDeNumeros.indexOf(0));
// console.log(miArrayDeNumeros.indexOf(99));
// console.log(miArrayDeNumeros.indexOf(-99)); // Retorna -1 porque el valor no existe en el Array

// console.log(miArrayDeNumeros.includes(0)); // Retorna true si existe
// console.log(miArrayDeNumeros.includes(-99)); // Retorna false si no existe


const miArrayDeStrings = ["Hola", "Mundo", "Coderhouse"];
// for(let i = 0; i < miArrayDeStrings.length; i++) {
//     console.log("En el indice: " + i + " esta el valor: " + miArrayDeStrings[i]);
// }

// console.log(miArrayDeStrings.includes("Coderhouse")); 
// console.log(miArrayDeStrings);
// console.log(miArrayDeStrings.sort()); // Ordena Alfabeticamente -> (No es recomendable)
// console.log(miArrayDeStrings.sort().reverse()); // Ordena Alfabeticamente en forma Descendente-> (No es recomendable)

// Objeto

// const producto = {
//     id: 1,
//     nombre: "Azucar",
//     precio: 1200
// }
// console.log(producto);


// const productos = [
//     {
//         id: 1,
//         nombre: "Azucar",
//         precio: 1200
//     },
//     {
//         id: 2,
//         nombre: "Yerba",
//         precio: 1890
//     },
//     {
//         id: 3,
//         nombre: "Café",
//         precio: 6500
//     },
//     {
//         id: 4,
//         nombre: "Coca Cola",
//         precio: 1950
//     },
//     {
//         id: 5,
//         nombre: "Pepsi",
//         precio: 1750
//     }
// ];


// console.log(productos[0].id);
// console.log(productos[0].nombre);
// console.log(productos[0].precio);

// productos.push(
//     {
//         id: 6,
//         nombre: "Harina",
//         precio: 1500,
//         stock: 12000
//     }
// );

// const productoNuevo = {
//     id: 7,
//     pais: "Argentina",
//     provincia: "Bs As",
//     ciudad: "Quilmes",
//     nombre: "Cafetera",
//     precio: 199999.99,
//     stock: 6
// }

// productos.push(productoNuevo);
// productos.push(
//     {
//         id: 8,
//         pais: "Argentina",
//         provincia: "Bs As",
//         ciudad: "Quilmes",
//         nombre: "Cafetera",
//         precio: 299000.99,
//         stock: 16
//     }
// );

// console.log(productos);

// Clase
class Producto {

    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    sumarIva() {
        this.precio = parseFloat((this.precio * 1.21).toFixed(2));
    }
}

const productos = [];

productos.push(new Producto(1, "Azucar", 1250, 10));
productos.push(new Producto(2, "Yerba", 1890, 35));
productos.push(new Producto(3, "Café", 6500, 50));
productos.push(new Producto(4, "Coca Cola", 1980, 180));





const productoX = new Producto(5, "Pepsi", 1250, 66);
// productoX.sumarIva();
// console.log(productoX.precio);

productos.push(productoX);


for (const producto of productos) {
    producto.sumarIva();
    console.log(`El Producto con ID: ${producto.id} es: ${producto.nombre}.- El Precio de ${producto.nombre} es de $${producto.precio}.- y existen ${producto.stock} Unidades.`);
}


// console.log(productos);