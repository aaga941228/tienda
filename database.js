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
                precio: {
                    mx: 3500,
                }
            },
            {
                id: 2,
                nombre: 'Monitor',
                descripcion: 'monitor 4k',
                precio: {
                    mx: 3000,
                }
            },
            {
                id: 3,
                nombre: 'Laptop',
                descripcion: 'laptop color blanca mediana',
                precio: {
                    mx: 12000,
                }
            },
            {
                id: 4,
                nombre: 'Laptop',
                descripcion: 'tablet color negra',
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
                precio: {
                    mx: 10000,
                }
            },
            {
                id: 2,
                nombre: 'Libro',
                descripcion: 'libro de pasta dura nuevo',
                precio: {
                    mx: 0,
                }
            },
            {
                id: 3,
                nombre: 'Coleccion',
                descripcion: 'coleccion de libros usados de pasta dura',
                precio: {
                    mx: 10000,
                }
            },
            {
                id: 4,
                nombre: 'Coleccion',
                descripcion: 'coleccion de libros usados de pasta dura',
                precio: {
                    mx: 10000,
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
                precio: {
                    mx: 3000,
                }
            },
            {
                id: 2,
                nombre: 'Reloj',
                descripcion: 'reloj marca tisot',
                precio: {
                    mx: 45000,
                }
            },
            {
                id: 3,
                nombre: 'Sombrero',
                descripcion: 'sombrero negro',
                precio: {
                    mx: 450,
                }
            },
            {
                id: 4,
                nombre: 'Tennis',
                descripcion: 'tennis marca converse',
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
                precio: {
                    mx: 20000,
                }
            },
            {
                id: 2,
                nombre: 'Sofa',
                descripcion: 'sofa blanco',
                precio: {
                    mx: 8000,
                }
            },
            {
                id: 3,
                nombre: 'Sofa',
                descripcion: 'sofa negro',
                precio: {
                    mx: 10000,
                }
            },
            {
                id: 4,
                nombre: 'Silla',
                descripcion: 'Silla color blanco',
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
                precio: {
                    mx: 2500,
                }
            },
            {
                id: 2,
                nombre: 'Peluche',
                descripcion: 'oso de peluche',
                precio: {
                    mx: 200,
                }
            },
            {
                id: 3,
                nombre: 'Robot',
                descripcion: 'robot de juegete',
                precio: {
                    mx: 300,
                }
            },
            {
                id: 4,
                nombre: 'Tren',
                descripcion: 'tren con vias de madera',
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
                precio: {
                    mx: 1200,
                }
            },
            {
                id: 2,
                nombre: 'Jugo',
                descripcion: 'jugo de naranja en caja',
                precio: {
                    mx: 100,
                }
            },
            {
                id: 3,
                nombre: 'Cepillos',
                descripcion: 'cepillos para maquillar',
                precio: {
                    mx: 400,
                }
            },
            {
                id: 4,
                nombre: 'Locion',
                descripcion: 'locion para cuello',
                precio: {
                    mx: 450,
                }
            },
        ]
    },
]

const obtenerSubcategorias = () => listaSubcategorias
const obtenerProductos = () => listaProductos