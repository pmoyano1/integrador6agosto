const React = require('react');

function View (props){
    const { message } = props;
    return<h1>{ message }</h1>
} 

module.exports = View;
