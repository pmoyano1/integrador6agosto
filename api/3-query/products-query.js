const router = require('nordic/ragnar').router();
const products = require('../../utils/mockProducts');

router.get('/', (req, res) => {
    const { title, minPrice, maxPrice } = req.query;

});

module.exports = router;