const Subcategoria = (subcategoria) => (`
    <div class="subcategoria " data-categoria="${subcategoria.subcategoria}">
        <div class="enlaces-subcategoria">
            <button class="btn-regresar"><i class="fas fa-arrow-left"></i>Regresar</button>
            <h3 class="subtitulo">${subcategoria.titulo}</h3>
            ${subcategoria.productos.map(elemento => `
                <a href="#">${elemento}</a>
            `).join('')}
        </div>
        <div class="banner-subcategoria">
            <a href="#">
                <img src="img/${subcategoria.nombreCorto}-banner-1.png" alt="" loading="lazy">
            </a>
        </div>
        <div class="galeria-subcategoria">
			<a href="#">
				<img src="img/${subcategoria.nombreCorto}-galeria-1.png" alt="" loading="lazy">
			</a>
			<a href="#">
				<img src="img/${subcategoria.nombreCorto}-galeria-2.png" alt="" loading="lazy">
			</a>
			<a href="#">
				<img src="img/${subcategoria.nombreCorto}-galeria-3.png" alt="" loading="lazy">
			</a>
			<a href="#">
				<img src="img/${subcategoria.nombreCorto}-galeria-4.png" alt="" loading="lazy">
			</a>
		</div>
    </div>
`)