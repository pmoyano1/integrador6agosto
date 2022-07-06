const restclient = require('nordic/restclient')({
    timeout: 10000,
    // bORRARRRRRR
    baseURL: 'https://api.mercadolibre.com'
})

class ProductsService {
    static getProducts(siteId, name, limit){
        return restclient.get(`/sites/${siteId}/search`, {
            params:{
                q: name,
                limit
            }
            })
            .then(response => {
                return response.data.results;
            })
            .catch(err => {
                throw new Error(err)
            })
        }
}

module.exports = ProductsService;