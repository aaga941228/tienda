const listaSubcategorias = [
    {
        id: 1,
        titulo: 'Tecnologia y computadoras',
        nombreCorto: 'tecnologia',
        subcategoria: 'tecnologia-y-computadoras',
        productos: [
            'Laptops',
            'Tablets',
            'Computadoras de escritorio',
            'Monitores',
            'Components'
        ]
    },
    {
        id: 2,
        titulo: 'Libros',
        nombreCorto: 'libros',
        subcategoria: 'libros',
        productos: [
            'Top sellers',
            'Ciencia ficcion',
            'Fantasia',
            'Miedo',
        ]
    },
    {
        id: 3,
        titulo: 'Ropa y accesorios',
        nombreCorto: 'ropa',
        subcategoria: 'ropa-y-accesorios',
        productos: [
            'Ropa',
            'Zapatos',
            'Accesorios',
            'Relojes',
        ]
    },
    {
        id: 4,
        titulo: 'Hogar y cocina',
        nombreCorto: 'hogar',
        subcategoria: 'hogar-y-cocina',
        productos: [
            'Cocina',
            'Electrodomesticos',
            'Limpieza',
            'Manualidades',
            'Jardin'
        ]
    },
    {
        id: 5,
        titulo: 'Juegos y jugetes',
        nombreCorto: 'juegos',
        subcategoria: 'juegos-y-jugetes',
        productos: [
            'Jugetes',
            'Juegos de mesa',
            'Arte libre',
            'Ajedrez',
        ]
    },
    {
        id: 6,
        titulo: 'Salud y belleza',
        nombreCorto: 'belleza',
        subcategoria: 'salud-y-belleza',
        productos: [
            'Cuidado de la piel',
            'Maquillaje',
            'Lociones',
            'Shampoo',
        ]
    },
]

const listaProductos = [
    {
        subcategoriaId: 1,
        productos: [
            {
                id: 1,
                nombre: 'Kindle',
                descripcion: 'kindle ultimo modelo',
                ruta: 'img/tecnologia-galeria-1.png',
                precio: {
                    mx: 3500,
                }
            },
            {
                id: 2,
                nombre: 'Monitor',
                descripcion: 'monitor 4k',
                ruta: 'img/tecnologia-galeria-2.png',
                precio: {
                    mx: 3000,
                }
            },
            {
                id: 3,
                nombre: 'Laptop',
                descripcion: 'laptop color blanca mediana',
                ruta: 'img/tecnologia-galeria-3.png',
                precio: {
                    mx: 12000,
                }
            },
            {
                id: 4,
                nombre: 'Tablet',
                descripcion: 'tablet color negra',
                ruta: 'img/tecnologia-galeria-4.png',
                precio: {
                    mx: 10000,
                }
            },
        ]
    },
    {
        subcategoriaId: 2,
        productos: [
            {
                id: 1,
                nombre: 'Coleccion',
                descripcion: 'coleccion de libros usados de pasta dura',
                ruta: 'img/libros-galeria-1.png',
                precio: {
                    mx: 1500,
                }
            },
            {
                id: 2,
                nombre: 'Libro',
                descripcion: 'libro de pasta dura nuevo',
                ruta: 'img/libros-galeria-2.png',
                precio: {
                    mx: 350,
                }
            },
            {
                id: 3,
                nombre: 'Coleccion',
                descripcion: 'coleccion de libros usados de pasta dura',
                ruta: 'img/libros-galeria-3.png',
                precio: {
                    mx: 1800,
                }
            },
            {
                id: 4,
                nombre: 'Coleccion',
                descripcion: 'coleccion de libros usados de pasta dura',
                ruta: 'img/libros-galeria-4.png',
                precio: {
                    mx: 1000,
                }
            },
        ]
    },
    {
        subcategoriaId: 3,
        productos: [
            {
                id: 1,
                nombre: 'Conjunto',
                descripcion: 'conjuto de blusa, pantalones y cinturon',
                ruta: 'img/ropa-galeria-1.png',
                precio: {
                    mx: 3000,
                }
            },
            {
                id: 2,
                nombre: 'Reloj',
                descripcion: 'reloj marca tisot',
                ruta: 'img/ropa-galeria-2.png',
                precio: {
                    mx: 45000,
                }
            },
            {
                id: 3,
                nombre: 'Sombrero',
                descripcion: 'sombrero negro',
                ruta: 'img/ropa-galeria-3.png',
                precio: {
                    mx: 450,
                }
            },
            {
                id: 4,
                nombre: 'Tennis',
                descripcion: 'tennis marca converse',
                ruta: 'img/ropa-galeria-4.png',
                precio: {
                    mx: 250,
                }
            },
        ]
    },
    {
        subcategoriaId: 4,
        productos: [
            {
                id: 1,
                nombre: 'Licuadora',
                descripcion: 'licuadora para jugos',
                ruta: 'img/hogar-galeria-1.png',
                precio: {
                    mx: 20000,
                }
            },
            {
                id: 2,
                nombre: 'Sofa',
                descripcion: 'sofa blanco',
                ruta: 'img/hogar-galeria-2.png',
                precio: {
                    mx: 8000,
                }
            },
            {
                id: 3,
                nombre: 'Sofa',
                descripcion: 'sofa negro',
                ruta: 'img/hogar-galeria-3.png',
                precio: {
                    mx: 10000,
                }
            },
            {
                id: 4,
                nombre: 'Silla',
                descripcion: 'Silla color blanco',
                ruta: 'img/hogar-galeria-4.png',
                precio: {
                    mx: 450,
                }
            },
        ]
    },
    {
        subcategoriaId: 5,
        productos: [
            {
                id: 1,
                nombre: 'Jugetes',
                descripcion: 'coleccion de jugetes',
                ruta: 'img/juegos-galeria-1.png',
                precio: {
                    mx: 2500,
                }
            },
            {
                id: 2,
                nombre: 'Peluche',
                descripcion: 'oso de peluche',
                ruta: 'img/juegos-galeria-2.png',
                precio: {
                    mx: 200,
                }
            },
            {
                id: 3,
                nombre: 'Robot',
                descripcion: 'robot de juegete',
                ruta: 'img/juegos-galeria-3.png',
                precio: {
                    mx: 300,
                }
            },
            {
                id: 4,
                nombre: 'Tren',
                descripcion: 'tren con vias de madera',
                ruta: 'img/juegos-galeria-4.png',
                precio: {
                    mx: 1450,
                }
            },
        ]
    },
    {
        subcategoriaId: 6,
        productos: [
            {
                id: 1,
                nombre: 'Maquillaje',
                descripcion: 'conjunto de maquillaje',
                ruta: 'img/belleza-galeria-1.png',
                precio: {
                    mx: 1200,
                }
            },
            {
                id: 2,
                nombre: 'Jugo',
                descripcion: 'jugo de naranja en caja',
                ruta: 'img/belleza-galeria-2.png',
                precio: {
                    mx: 100,
                }
            },
            {
                id: 3,
                nombre: 'Cepillos',
                descripcion: 'cepillos para maquillar',
                ruta: 'img/belleza-galeria-3.png',
                precio: {
                    mx: 400,
                }
            },
            {
                id: 4,
                nombre: 'Locion',
                descripcion: 'locion para cuello',
                ruta: 'img/belleza-galeria-4.png',
                precio: {
                    mx: 450,
                }
            },
        ]
    },
]

const obtenerSubcategorias = () => listaSubcategorias
const obtenerProductos = () => listaProductos
const obtenerProductosPorIdSubcategoria = (id) => listaProductos.filter((elemento) => elemento.subcategoriaId === id)