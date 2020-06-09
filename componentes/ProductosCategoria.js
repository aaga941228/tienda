const ProductosCategoria = (categoria) => {
    return `
    <div class="productos-contenedor" id="${categoria.nombreCorto}">
        <div class="productos-por-categorias">
            <h2>${categoria.titulo}</h2>
            <div class="contenedor-tarjetas">
                ${obtenerProductosPorIdSubcategoria(categoria.id)[0].productos.map((elemento) => ProductoTarjeta(elemento)).join('')}
            </div>       
        </div>
    </div>
`}