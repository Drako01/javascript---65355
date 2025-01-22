const cabecera = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const links = ['Index', 'Products', 'Contact'];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const origen = document.createElement('a');
origen.href = '/';
origen.appendChild(img);
img.src = '/img/logo.png';
img.alt = 'CoderHouse';

liImagen.appendChild(origen);
ul.appendChild(liImagen);

for ( const link of links){
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >
    ${link}
    </a>`;
    ul.appendChild(li);
}

cabecera.style.backgroundColor = '#c2c2c2';