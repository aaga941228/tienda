const btnDepartamentos = document.querySelector('#btn-departamentos')
const grid = document.querySelector('#grid')
const contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav')
const esDispositivoMovil = () =>  window.innerWidth <= 800

btnDepartamentos.addEventListener('mouseover', () => {
    if(!esDispositivoMovil()) {
        grid.classList.add('activo')
    }
})

grid.addEventListener('mouseleave', () => {
    if(!esDispositivoMovil()) {
        grid.classList.remove('activo')
    }
})

document.querySelectorAll('#menu .categorias a').forEach(elemento => {
    elemento.addEventListener('mouseover', evento => {
        document.querySelectorAll('#menu .subcategoria').forEach(categoria => {
            categoria.classList.remove('activo')
            if (categoria.dataset.categoria === evento.target.dataset.categoria) {
                categoria.classList.add('activo')
            }
        })
    })
})

document.querySelector('#btn-menu-barras').addEventListener('click', evento => {
    evento.preventDefault()
    if(contenedorEnlacesNav.classList.contains('activo')) {
        contenedorEnlacesNav.classList.remove('activo')
        document.querySelector('body').style.overflow = 'visible'
    } else {
        contenedorEnlacesNav.classList.add('activo')
        document.querySelector('body').style.overflow = 'hidden'
    } 
})