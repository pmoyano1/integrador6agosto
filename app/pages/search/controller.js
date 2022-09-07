const React = require('react');
const View = require('./view');

exports.render = function render (req, res) {
    const searchView = (props) => <View {...props}/>
    res.render(searchView);
}