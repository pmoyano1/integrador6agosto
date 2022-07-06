/**
 * Crear un array de productos y exportarlo para 
 * que lo utilice la ruta /products de la carpeta api.
 * 
 * Una vez creado, deberás ejecutar en cónsola el comando
 * npm run test:unit:watch mockProducts.spec.js y corroborar que
 * todos los tests estén pasando.
 */

let products = [
    {
        id: 'MLA123',
        title: 'Benito',
        quantity: 1,
        price: 300,
        description: 'Gato'
    },
    {
        id: 'MLA123',
        title: 'Florencio',
        quantity: 1,
        price: 600,
        description: 'Otro gato'
    },
    {
        id: 'MLA123',
        title: 'Vittorio',
        quantity: 1,
        price: 450,
        description: 'Un gato mas y van...'
    },
    {
        id: 'MLA123',
        title: 'Luca',
        quantity: 0,
        price: 760,
        description: 'Último gato.'
    },
]

module.exports= products;