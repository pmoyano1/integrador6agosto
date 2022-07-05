const router = require('nordic/ragnar').router();
const {supportedCurrencies, logPath} = require('./middlewares');

/** 
Ejercicio 2 - Crear un endpoint /api/currencies

Este endpoint debe utilizar el middleware 
"supportedCurrencies" que se encuentra en el archivo middlewares.js 
(para esto deberás implementarlo primero). 

El endpoint deberá responder con el valor de res.locals.currencies.

NOTA: Para poder visualizar el resultado en el navegador, es necesario 
implementar esta ruta en /api/index.js
* */

router.get('/', logPath, supportedCurrencies, (req, res) => {
    res.json(res.locals.currencies);
});

module.exports = router;