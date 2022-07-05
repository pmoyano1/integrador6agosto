const products = require('../../utils/productsMock');
const router = require('nordic/ragnar').router();
const {logPath} = require('../2-currencies/middlewares');
/**
 * Vamos a “simular” una llamada a la API de MeLi (por el momento, no vamos a interactuar 
 * con la API oficial, eso vamos a hacerlo en próximas clases). Para lograrlo, vamos a 
 * necesitar crear un array de productos en una variable en nuestro código. 

Queremos que al ingresar a la ruta “/api/products” nos traiga 4 productos diferentes
Los mismos deberán tener las siguientes propiedades (respetar los nombres):
-id
-title
-price
-description
-quantity

Requerir el archivo con los productos para enviarlos como respuesta
 */

router.get('/',logPath,(req,res)=>{
    res.json(products)
})

module.exports = router;