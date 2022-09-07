const React = require('react');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const { useState } = React;


function View (props) {
    const preloadedState = {}
    const [nameProduct, setNameProduct] = useState()
    const handleChange = (e) => {
        console.log(nameProduct)
        setNameProduct(e.target.value)
    }
    const searchProduct = (e) => {
        e.preventDefault();
        nameProduct.length > 2
          && window.location.assign(
            `/listado?q=${nameProduct}`
          )
      };

      console.log(nameProduct);
        

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
          <Script src="search.js" />
          <input type="text" placeholder='buscar' onChange={handleChange}/>
          <button onClick={searchProduct}>Buscar</button>
          </>
)}

module.exports = View;