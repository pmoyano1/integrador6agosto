/**
Ejercicio 1 - Desarrollar el middleware logPath. 

Cada vez que accedemos a una ruta
debería imprimir en consola el path de dicha ruta.

********************************************************
Despues de implementar el código, 
correr el comando npm run test:unit middlewares y 
comprobar que pasa el test `1) logPath`.
********************************************************/

exports.logPath = function logPath(req, res, next) {
  console.log(req.baseUrl);
  next();
}


/**
Ejercicio 2 - "supportedCurrencies"
Dicho middleware deberá crear una propiedad en res.locals, 
llamada "currencies" que contenga una lista de monedas:

{
  currencies: ["EUR", "USD"]
}

********************************************************
Despues de implementar el código, 
correr el comando npm run test:unit middlewares y 
comprobar que pasa el test `2) supportedCurrencies`.
********************************************************/

exports.supportedCurrencies = function supportedCurrencies(req, res, next) {
  const currencies = {
    currencies: ["EUR", "USD"]
  }
  res.locals.currencies = currencies;
  next();
}