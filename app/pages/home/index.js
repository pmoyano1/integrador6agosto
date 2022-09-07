/**
 * En esta carpeta deberás crear la page para la ruta /home, 
 * con sus archivos respectivos. 
 * 
 * NOTA: no olvides implementar la ruta en el archivo /app/server/index.js
 * 
 ******************************************************************************
 * Una vez implementada, ejecutar el comando `npm run test:unit:watch homeview`
 * y corroborar que los tests pasan.
 ******************************************************************************
 */


 /**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const { render } = require('./controller');

/**
 * Routers
 */
router.get('/', render);

/**
 * Expose router
 */
module.exports = router;
