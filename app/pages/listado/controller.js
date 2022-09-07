const React = require('react');
const View = require('./view');
const Service = require('../../../services/productsService')

exports.fetchProductsList = function fetchProductsList (req, res, next){
    Service.getProducts(req.platform.siteId, req.query.q)
    .then(result => {res.locals.products = result
        next()
    })
    .catch(error => next(error));
}

exports.render = function render (req, res) {
    const searchView = (props) => <View {...props}/>
    res.render(searchView, {products: res.locals.products} );
}
