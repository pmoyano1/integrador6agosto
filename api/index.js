/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const currencies = require('./2-currencies/currencies');
const queryProducts = require('./3-query/products-query');
/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/currencies', currencies);
router.use('/query-products', queryProducts);

/**
 * Expose API router
 */
module.exports = router;
