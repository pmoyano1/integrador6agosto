const React = require('react');
const hydrate = require('nordic/hydrate');
const View = require('../pages/listado/view');
const { products } = window.__PRELOADED_STATE__

hydrate(
    <View products = {products} />, document.getElementById("root-app")

)