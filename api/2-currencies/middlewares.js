const config = require('nordic/config');
const { basePath } = config.ragnar;
/**
Ejercicio 1 - Desarrollar el middleware logPath . 


Cada vez que accedemos a una ruta
debería muestrarnos por consola el path de dicha ruta.

********************************************************
Despues de implementar el código, 
correr el comando npm run test:unit middlewares y 
comprobar que pasan los test (tilde verde)
 ********************************************************/

 exports.logPath = function logPath(req,res,next){

   console.log(req.baseUrl)
   next()
 }



 /**
  * "supportedCurrencies"
Dicho middleware deberá crear 
una propiedad en res.locals, llamada 
"currencies" que contenga una lista de monedas:

{
currencies: ["ARS", "USD"]
}
  * */

  exports.supportedCurrencies = function supportedCurrencies(req,res,next){
  const currencies = {
  currencies: ["ARS", "USD"]
  }
  res.locals.currencies = currencies;
  next()
  }