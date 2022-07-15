/**
 * Ejercicio 2 - Desarrollar el middleware "logPath". 
 * 
 * Cada vez que accedemos a una ruta debería imprimir en
 * consola el path de dicha ruta.
 * 
 ********************************************************
 * Despues de implementar el código, correr el comando
 * `npm run test:unit:watch middlewares` y  comprobar que 
 * pasa el test `1) logPath`.
 ********************************************************/

exports.logPath = function logPath(req, res, next) {
  next();
}


/**
 * Ejercicio 2 - "supportedCurrencies"
 * Dicho middleware deberá crear una propiedad en res.locals, 
 * llamada "currencies" que contenga una lista de monedas:
 * 
 * {
 *   currencies: ["EUR", "USD"]
 * }
 * 
 ********************************************************
 * Despues de implementar el código, 
 * correr el comando npm run test:unit:watch middlewares y 
 * comprobar que pasa el test `2) supportedCurrencies`.
 ********************************************************/

