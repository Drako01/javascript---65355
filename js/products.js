// console.log("Inicio de Programa");

// function funcionA() {
//     console.log("Entrando a la Funcion A");
//     funcionB();
//     console.log("Saliendo de la Funcion A");
// }

// function funcionB() {
//     console.log("Entrando a la Funcion B");
//     setTimeout(() => {
//         console.log("Saliendo de la Funcion B");
//     }, 1500) // Milisegundos = 1seg y medio
// }

// function funcionC() {
//     console.log("Entrando a la Funcion C");
// }
// setTimeout(() => {
//     funcionA()
// }, 0)

// setTimeout(() => {
//     funcionC()
//     console.log("Saliendo de la Funcion C");
// }, 3000);

// console.log("Finalizando el Programa");

// let segundos = 0;
// let minutos = 0;
// let horas = 0;

// const cronometro = setInterval(() => {

//     segundos++;

//     if(segundos === 60){
//         segundos = 0;
//         minutos++;
//     }

//     if(minutos === 60){
//         minutos = 0;
//         horas++;
//     }

//     if(horas === 24){
//         horas = 0;
//         minutos = 0;
//         segundos = 0;
//     }


//     let horasStr = horas.toString();
//     if(horas < 10){
//         horasStr = '0' + horas;
//     }

//     let minutosStr = minutos.toString();
//     if(minutos < 10){
//         minutosStr = '0' + minutos;
//     }

//     let segundosStr = segundos.toString();
//     if(segundos < 10){
//         segundosStr = '0' + segundos;
//     }

//     const tiempo = horasStr + ':' + minutosStr + ':' + segundosStr;
//     console.log(tiempo);

// }, 1000)

// setTimeout(() => {
//     clearInterval(cronometro);
//     console.log("Cronometro detenido");
// }, 10000)

// Promesas

// const peticion = () => {
//     try {
//         const data = fetch('/productosjson')
//         console.log(data);
//     } catch (error) {
//         console.error("Algo salio mal. ", error);
//     } finally {
//         console.log("Peticion Finalizada");
//     }
// }

// peticion();

// const peticion = () => {
//     fetch('/productos.json')
//         .then((respuesta) => respuesta.json())
//         .then((datos) => {
//             console.log(datos)
//             datos.forEach((item, index) => {
//                 console.log(`Producto ${index + 1}: `, item)
//             });
//         })
//         .catch((error) => {
//             console.error("Algo salio mal. ", error);
//         })
//         .finally(() => {
//             console.log("Peticion Finalizada");
//         })
    
// }

// peticion();

const cards = document.getElementById('cards');

const peticionA = () => {
    fetch('/productos.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            const data = datos;

            data.forEach(item => {
                const card = document.createElement('div');
                card.innerHTML = `
                            <div class="card" style="width: 18rem; height: 32rem;">
                                <img class="card-img-top" src=${item.imagen} alt=${item.nombre}/>
                                <div class="card-body">
                                    <h5 class="card-title">${item.nombre}</h5>
                                    <p class="card-text">Descripcion: ${item.descripcion}</p>
                                    <p class="card-text">Precio: $${item.precio}.-</p>
                                    <p class="card-text">Stock: ${item.stock} Unid</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>     
                            </div>                
                `
                cards.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Algo salio mal. ", error);
        })
        .finally(() => {
            console.log("Peticion Finalizada");
        })
    
}

// peticionA();

const peticionB = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Adidas')
    const datos = await respuesta.json();
    const data = await datos.results
    for ( item of data ) {
        const card = document.createElement('div');
                card.innerHTML = `
                            <div class="card" style="width: 18rem; height: 32rem;">
                                <img class="card-img-top" src=${item.thumbnail} alt=${item.title}/>
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <p class="card-text">Proveedor: ${item.official_store_name}</p>
                                    <p class="card-text">Precio: $${item.price}.-</p>
                                    <p class="card-text">Stock: ${item.available_quantity} Unid</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>     
                            </div>                
                `
                cards.appendChild(card);
    }
    
}

peticionB();

const peticionC = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Motorola')
    const datos = await respuesta.json();
    const data = await datos.results
    for ( item of data ) {
        const card = document.createElement('div');
                card.innerHTML = `
                            <div class="card" style="width: 18rem; height: 32rem;">
                                <img class="card-img-top" src=${item.thumbnail} alt=${item.title}/>
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <p class="card-text">Proveedor: ${item.official_store_name}</p>
                                    <p class="card-text">Precio: $${item.price}.-</p>
                                    <p class="card-text">Stock: ${item.available_quantity} Unid</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>     
                            </div>                
                `
                cards.appendChild(card);
    }
    
}

peticionC();


const peticionD = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Iphone')
    const datos = await respuesta.json();
    const data = await datos.results
    for ( item of data ) {
        const card = document.createElement('div');
                card.innerHTML = `
                            <div class="card" style="width: 18rem; height: 32rem;">
                                <img class="card-img-top" src=${item.thumbnail} alt=${item.title}/>
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <p class="card-text">Proveedor: ${item.official_store_name}</p>
                                    <p class="card-text">Precio: $${item.price}.-</p>
                                    <p class="card-text">Stock: ${item.available_quantity} Unid</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>     
                            </div>                
                `
                cards.appendChild(card);
    }
    
}

peticionD();


/// co

const verificarCredenciales = async (usuario, contrasenia) => {
    if(usuario !== 'admin' || contrasenia !== '1234'){
        console.error("Usuario o Contraseña Incorrecto");
    } else {
        return 'Acceso concedido';
    }    
    return 'Acceso negado';
}


const login = async () => {
    try {
        const resultado = await verificarCredenciales("admin", "1234");
        console.log(resultado);

    }catch (error){
        console.error("Error en el Login ", error.message)
    }
}

login()