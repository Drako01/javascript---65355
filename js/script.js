// Objetos
// const persona1 = {
//     id: 1,
//     nombre: "Ana",
//     apellido: "Salas",
//     edad: 20,
//     email: "ana@mail.com"
// }
// // console.log(persona1)

// const persona2 = {
//     id: 2,
//     nombre: "Francisco",
//     apellido: "Giardelli",
//     edad: 24,
//     email: "francisco@mail.com"
// }
// // console.log(persona2)


// function Persona(persona){ // Pasamos un Objeto Literal
//     this.id = persona.id,
//     this.nombre = persona.nombre,
//     this.apellido = persona.apellido,
//     this.edad = persona.edad,
//     this.email = persona.email
// }

// const personaLiteral = new Persona( // new genera una Nueva Instancia del Objeto Persona
//     {
//         id: 1,
//     nombre: "Ana",
//     apellido: "Salas",
//     edad: 20,
//     email: "ana@mail.com"
//     }
// )

// console.log(personaLiteral)

// const personaLiteral2 = new Persona( // new genera una Nueva Instancia del Objeto Persona
//     {
//         id: 2,
//         nombre: "Francisco",
//         apellido: "Giardelli",
//         edad: 24,
//         email: "francisco@mail.com"
//     }
// )

// console.log(personaLiteral2)

// function Persona(id, nombre, apellido, edad, email){
//     this.id = id,
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.edad = edad,
//     this.email = email
// }

// const anaPersona = new Persona(1,"Ana", "Salas", 40, "ana@mail.com");


// anaPersona.edad = 20;

// anaPersona['email'] = "anasalas@mail.com";

// console.log(anaPersona);

// function Gato(nombre, edad, raza, color, peso){
//     this.nombre = nombre,
//     this.edad = edad,
//     this.raza = raza,
//     this.color = color,
//     this.peso = peso
// }

// function Perro(nombre, edad, raza, color, peso){
//     this.nombre = nombre,
//     this.edad = edad,
//     this.raza = raza,
//     this.color = color,
//     this.peso = peso
// }

// const gatito = new Gato("Michi", 4, "Gato", "Blanco", 3);
// console.log(gatito);

// const perrito = new Perro("Daisy", 4, "Yorki", "Beige", 2.5);
// console.log(perrito);

// class Mascota {
//     constructor(tipo, nombre, edad, raza, color, peso) {
//             this.tipo = tipo,
//             this.nombre = nombre,
//             this.edad = edad,
//             this.raza = raza,
//             this.color = color,
//             this.peso = peso
//     }

//     caminar() {
//         console.log("Mi " +  this.tipo + " " + this.nombre + " esta Caminado.!");
//     }

//     comer() {
//         console.log("Mi " +  this.tipo + " " + this.nombre + " esta Comiendo.!");
//     }
// }

// const perrito = new Mascota("Perro", "Daisy", 4, "Yorki", "Beige", 2.5);
// const gatito = new Mascota("Gato", "Michi", 4, "Gato", "Blanco", 3);
// console.log(perrito);
// console.log(gatito);

// function caminar() {
//     console.log("Mi " +  perrito.tipo + " " + perrito.nombre + " esta Caminado.!");
// };

// perrito.caminar(); // Aca estamos invocando al metodo de la clase Mascota
// gatito.caminar();

// perrito.comer();
// gatito.comer();

// caminar();

// Alamcenamiento

// let mensaje = "Hola desde Coder";
// let mensaje = "Hola desde Coderhouse";
// localStorage.setItem('mensaje', mensaje);

// // console.log(localStorage.getItem('mensaje'))

// localStorage.setItem('numero', 1);
// localStorage.setItem('booleans', true);

// localStorage.setItem('Perro', perrito);
// localStorage.setItem('Perro', JSON.stringify(perrito));
// localStorage.setItem('Gato', JSON.stringify(gatito));
// // const carrito = [];
// // localStorage.setItem('carrito', carrito);

// console.log(typeof perrito)
// console.log(typeof JSON.stringify(perrito))

// const perritoComoString = localStorage.getItem('Perro');
// console.log(perritoComoString);

// const perritoComoObject = JSON.parse(localStorage.getItem('Perro'));
// console.log(perritoComoObject);

// localStorage.removeItem('numero');
// localStorage.removeItem('booleans');

// localStorage.clear();

// for (let i = 0; i < localStorage.length; i++){
//     let clave = localStorage.key(i);
//     console.log("Para la Clave : " + clave + "\nValor: " + localStorage.getItem(clave));
// }

// const guardarEnElLocalStorage = (clave, valor) => {
//     localStorage.setItem(clave, valor)
// }

// function Perro(nombre, edad, raza, color, peso){
//     this.nombre = nombre,
//     this.edad = edad,
//     this.raza = raza,
//     this.color = color,
//     this.peso = peso
// }

// const perrito = new Perro("Daisy", 4, "Yorki", "Beige", 2.5);

// guardarEnElLocalStorage('Perro', JSON.stringify(perrito));

// guardarEnElLocalStorage(perrito.nombre, JSON.stringify(perrito));

// localStorage.clear();


// const guardarEnElLocalStorage = (clave, valor) => {
//     localStorage.setItem(clave, valor)
// }

// const perrito = new Mascota("Perro", "Daisy", 4, "Yorki", "Beige", 2.5);
// const perrito1 = new Mascota("Perro", "Max", 6, "Collie", "Beige", 25);
// const gatito = new Mascota("Gato", "Michi", 4, "Gato", "Blanco", 3);
// const gatito1 = new Mascota("Gato", "Tom", 9, "Persa", "Negro", 5);

// const arrayDeMascotas = []

// arrayDeMascotas.push(perrito);
// arrayDeMascotas.push(perrito1, gatito, gatito1);

// console.log(arrayDeMascotas);

// for (const mascota of arrayDeMascotas){
//     guardarEnElLocalStorage(mascota.nombre, JSON.stringify(mascota));
// }

// for (const mascota of arrayDeMascotas){
//     guardarEnElLocalStorage('Mascota', JSON.stringify(mascota));
// }

// // for (const mascota of arrayDeMascotas){
//     guardarEnElLocalStorage('Mascotas', JSON.stringify(arrayDeMascotas));
// // }