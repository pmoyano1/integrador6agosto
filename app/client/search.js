const React = require('react');
const hydrate = require('nordic/hydrate');
const View = require('../pages/search/view');

hydrate(
    <View />, document.getElementById("root-app")

)