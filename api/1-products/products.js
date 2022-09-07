const router = require('nordic/ragnar').router();
const ProductsService = require('../../services/productsService');

router.get('/', (req, res) => {
    const { q } = req.query
    const { siteId } = req.platform
    ProductsService.getProducts(siteId, q)
        .then( response => res.status(200).json(response) )
        .catch( error => res.send(error))
});

module.exports = router;
