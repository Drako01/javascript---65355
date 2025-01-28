const main = document.getElementById('main');

const botonDeMuestra = document.createElement('button');
botonDeMuestra.textContent = 'Click Aqui';
botonDeMuestra.style.padding = '0.5rem 1rem'
botonDeMuestra.style.margin = '1rem'
botonDeMuestra.classList.add("btn", "btn-success");
main.appendChild(botonDeMuestra);

const usuario = {
    nombre: 'Alejandro',
    apellido: 'Di Stefano'
}

botonDeMuestra.addEventListener('click', () => {
    // alert("Me hicieron Click!")
    // Swal.fire(
    //     {
    //         title: "Me hicieron Click!",
    //         text: "Gracias por estar en esta Clase",
    //         icon: "question",
    //         imageUrl: '/img/logo.png',
    //         footer : `<a href="https://coderhouse.com">Llevame a CoderHouse</a>`
    //     }
    // );

    // Swal.fire(
    //     {
    //         title: 'Eliminar Producto',
    //         text: 'Esta seguro de eliminar este Producto?',
    //         icon: "question",
    //         showCancelButton: true,
    //         confirmButtonColor: '#262626',
    //         cancelButtonColor: '#c2c2c2',
    //         confirmButtonText: 'Si'
    //     }
    // ).then((result) => {
    //     if (result.isConfirmed) {
    //         Swal.fire({
    //             title: 'Confirmacion',
    //             text: 'Su pructo ha sido Eliminado con éxito!',
    //             icon: 'success'
    //         })
    //     }
    // })

    // Toastify({
    //     text: 'Soy un Toastify',
    //     gravity: 'top',
    //     position: 'right'
    // }).showToast();

    Toastify({
        text: `${usuario.nombre} ${usuario.apellido} esta OnLine.!!`,
        gravity: 'top',
        position: 'right',
        avatar: '/img/logo.png',
        close: true,
        className: 'info',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d",
        },
        onClick: function () {
            // Swal.fire({
            //     title: 'Confirmacion',
            //     text: 'Usuario OnLine.!',
            //     icon: 'success'
            // })
            Toastify({
                text: 'El usuario esta OnLine.!',
                position : 'center',
                gravity : 'bottom',
                duration: 3000,
                // offset: {
                //     x: 300,
                //     y: 150
                // }
            }).showToast();
        }
    }).showToast();
})