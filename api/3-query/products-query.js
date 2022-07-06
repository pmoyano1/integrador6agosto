const router = require('nordic/ragnar').router();
const products = require('../../utils/mockProducts');

/**
Ejercicio 3 - Query
Utilizando el array de productos que creamos en /utils/mockProducts, vamos 
a implementar varios endpoints en nuestra app que nos permitan filtrar los
productos según los siguientes criterios:

1. Nombre: nos devolverá los productos cuyo nombre contenga el texto que pasamos
por parámetro (QueryString).

2. Precio: Nos devolverá los productos cuyo precio se encuentre dentro del rango
definido por parámetro (QueryString).

3. Stock: Nos devolverá los productos que tienen stock.
*/


router.get('/', (req, res) => {
    const { title, minPrice, maxPrice } = req.query;
    if (title && minPrice) {
        res.json(products.filter(p => p.title.includes(title) && p.price >= minPrice));
    } else if (title){
        res.json(products.filter(p => p.title.includes(title)));
    } else {
        res.send('No se encontraron productos.')
    }
});



/*
router.get('/', (req, res) => {
    const { title, minPrice, maxPrice } = req.query;
    if (title && minPrice && maxPrice) {
        let sendProducts = products.filter(p => 
            p.title.substring(title) && p.price >= minPrice && p.price <= maxPrice && p.quantity > 0
        );
        if (sendProducts.length) {
            res.json(sendProducts)
        } else {
            'No se encontraron productos.'
        }
    } else if (title && minPrice) {
        let sendProducts = products.filter(p => 
            p.title.substring(title) && p.price >= minPrice && p.quantity > 0
        );
        if (sendProducts.length) {
            res.json(sendProducts)
        } else {
            'No se encontraron productos.'
        }
    } else if (title && maxPrice) {
        let sendProducts = products.filter(p => 
            p.title.substring(title) && p.price <= maxPrice && p.quantity > 0
        );
        if (sendProducts.length) {
            res.json(sendProducts)
        } else {
            'No se encontraron productos.'
        }
    } else if (maxPrice && minPrice) {
        let sendProducts = products.filter(p => 
            p.price >= minPrice && p.price <= maxPrice && p.quantity > 0
        );
        if (sendProducts.length) {
            res.json(sendProducts)
        } else {
            'No se encontraron productos.'
        }
    } else if (title) {
        let sendProducts = products.filter(p => 
            p.title.substring(title) && p.quantity > 0
        );
        if (sendProducts.length) {
            res.json(sendProducts)
        } else {
            'No se encontraron productos.'
        }
    }
});
**/

module.exports = router;