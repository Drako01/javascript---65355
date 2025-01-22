// console.log(document);

const d = document;
// console.log(d.head);
// console.log(d.body);

const title = d.getElementById('titulo').innerText; // Trae solo 1 dato
// console.log(title);

const titulo = d.getElementsByTagName('title') // Trae un Array da tags

// console.log(titulo[0]);

titulo[0].innerText = title;

const contenedores = d.getElementsByClassName('contenedor');

// console.log(contenedores);

contenedores[0].innerHTML = `<h2>Contenedor <strong>1</strong></h2>`;

const personasArray = [
    "Ana",
    "Gonzalo",
    "Francisco",
    "Guillermo",
    "Jose",
    "Alejandro"
];


function cargarNombresAlDOM() {

    const tituloLocal = "Personas Cargadas";
    d.getElementById('tituloPersonas').innerHTML = tituloLocal;

    const personasUl = d.getElementById('personas');
    for (const persona of personasArray) {
        let li = d.createElement('li');
        li.innerHTML = `<h4>Nombre: ${persona}</h4>`;
        personasUl.appendChild(li);
    }

}

cargarNombresAlDOM();

const arrayDeObjetos = [];
const cargarObjetosDelArrayAlDOM = () => {

    const productos = [
        {
            id: 1,
            nombre: "Azucar",
            precio: 1890
        },
        {
            id: 2,
            nombre: "Yerba",
            precio: 2156
        },
        {
            id: 3,
            nombre: "Café",
            precio: 3900
        },
        {
            id: 4,
            nombre: "Coca Cola",
            precio: 1850
        },
        {
            id: 5,
            nombre: "Pepsi",
            precio: 1740
        },
    ]

    let main = d.getElementById('main');
    let secctionDelMain = d.createElement('section');

    let lista = d.createElement('ul');

    productos.forEach(producto => {
        let item = d.createElement('li');
        item.innerHTML = `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}.-`;
        lista.appendChild(item);
    })

    secctionDelMain.appendChild(lista);

    main.appendChild(secctionDelMain);
}

cargarObjetosDelArrayAlDOM();

const cuerpo = d.body;
const boton = d.querySelector('#boton');

boton.addEventListener('click', () => {
    cuerpo.style.backgroundColor = "black";
    cuerpo.style.color = "white";
})

contenedores[0].addEventListener('mouseover', () => {
    let h4C1 = contenedores[0].querySelector('h2');
    h4C1.style.color = "green";
})

contenedores[1].addEventListener('mouseover', () => {
    let h4C1 = contenedores[1].querySelector('h4');
    h4C1.style.color = "blue";
})

contenedores[2].addEventListener('mouseover', () => {
    let h4C1 = contenedores[2].querySelector('h4');
    h4C1.style.color = "red";
})

contenedores[3].addEventListener('mouseover', () => {
    let h4C1 = contenedores[3].querySelector('h4');
    h4C1.style.color = "yellow";
})

const productos = [
    {
        id: 1,
        nombre: "Azucar",
        precio: 1890
    },
    {
        id: 2,
        nombre: "Yerba",
        precio: 2156
    },
    {
        id: 3,
        nombre: "Café",
        precio: 3900
    },
    {
        id: 4,
        nombre: "Coca Cola",
        precio: 1850
    },
    {
        id: 5,
        nombre: "Pepsi",
        precio: 1740
    },
]

let buttonGreen = d.querySelectorAll('.button_grey')[1];

let indice = 0;

buttonGreen.addEventListener('click', () => {

    const listaDeProductos = d.querySelector('#productos-click');
    if (indice < productos.length) {
        let item = d.createElement('li');

        const objeto = productos[indice];

        item.innerHTML = `
                            <div class="card" style="width: 18rem;">
                                <img src="/img/1387.png" class="card-img-top" alt="${objeto.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${objeto.nombre}</h5>
                                    <p class="card-text">Precio: $${objeto.precio}.-</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        `


        listaDeProductos.appendChild(item);

        indice++;
    } else {
        alert("Todos los productos fueron agregados.!")
    }
})