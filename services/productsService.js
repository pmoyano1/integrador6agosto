const normalizer = require('./transforms/normalizer')
const restclient = require('nordic/restclient')({
  timeout: 5000,
});

class ProductsService { 
  static getProducts(siteId, q = "celular", offset = 0, limit = 10){
    return restclient.get(`/sites/${siteId}/search?q=${q}&limit=${limit}`)
    .then(response => normalizer(response.data.results))
    .catch(error => console.log(error))
  }
}

module.exports = ProductsService;
