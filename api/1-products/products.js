const products = require('../../utils/productsMock');
const router = require('nordic/ragnar').router();
/**
Vamos a “simular” una llamada a la API de MeLi (por el momento, no vamos a interactuar 
con la API oficial, eso vamos a hacerlo en las próximas clases). Para lograrlo, vamos a 
necesitar crear un array de productos en el archivo ubicado en /utils/mockProduct.js 

Queremos que al ingresar a la ruta “/api/products” se nos muestren 4 productos distintos en pantalla.
Los mismos deberán tener las siguientes propiedades (respetar los nombres):
-id
-title
-price
-description
-quantity

Debemos requerir el archivo con los productos para enviarlos como respuesta.

Para que este endpoint funcione, debemos implementar la ruta en /api/index.js
* */

router.get('/', (req, res) => {
    res.json(products);
});

module.exports = router;