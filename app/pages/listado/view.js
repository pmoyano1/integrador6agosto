const React = require('react');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const { useState } = React;


function View (props) {
    const {products} = props
    const preloadedState = {products}

    console.log(products)
        
    return (
        <>
          <Script>
            {`
                    window.__PRELOADED_STATE__= ${serialize(preloadedState, {
                      isJSON: true,
                    })}
                    console.log('%cProductsView page is loaded', 'color:green')
                `}
          </Script>
          <Script src="vendor.js" />
          <Script src="listado.js" />
          <h1>hola</h1>
          </>
)}

module.exports = View;