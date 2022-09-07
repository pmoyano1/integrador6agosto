const router = require('nordic/ragnar').router();

const { render, fetchProductsList } = require('./controller')
router.get("/", fetchProductsList, render)

module.exports = router;