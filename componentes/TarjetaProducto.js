const ProductoTarjeta = (Producto) => (`
    <div class="producto-tarjeta">
        <img src="${producto.ruta}" alt="">
        <div class="producto-contenido">
            <p class="producto-nombre">${producto.nombre}</p>
            <p class="producto-descripcion">${producto.descripcion}</p>
            <p class="producto-precio">$${producto.precio.mx} MX</p>
            <span class="carro-comprar">Agregar al carro <i class="fas fa-shopping-cart"></i></span>
        </div>
    </div> 
`)