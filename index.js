const btnDepartamentos = document.querySelector('#btn-departamentos')
const grid = document.querySelector('#grid')
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