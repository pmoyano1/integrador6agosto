const React = require('react');
const I18nProvider = require('nordic/i18n/I18nProvider');
const productsService = require('../../../services/productsService');
const View = require('./view');

exports.fetchProducts = function fetchProducts(req, res, next) {
    productsService.getProducts(req.platform.siteId, 'celular', 10)
        .then((data) => {
            res.locals.products = data;
            next();
        })
        .catch(err => next(err));
};

exports.render = function render(req, res) {

    const Home = props => (
        <I18nProvider i18n={req.i18n}>
            <View {...props} />
        </I18nProvider>
    );

    res.render(Home, {
        title: 'Productos',
        products: res.locals.products
    })
};
