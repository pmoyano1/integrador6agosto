const request = require('supertest');
const api = require('../../index');

describe('La ruta products del ejercicio 3', () => {  

    it('Responde con el producto que matchee con el título que le enviamos por query', async () => {
        const response = await request(api.app).get('/api/query-products?domain_override=mercadolibre.com.ar&title=Benito')
        let products = await JSON.parse(response.res.text);
        expect(products).toBeInstanceOf(Array);
    });

    it('Responde con el producto que matchee con el título que le enviamos por query', async () => {
        let minPrice = 200;
        const response = await request(api.app).get(`/api/query-products?domain_override=mercadolibre.com.ar&title=Benito&minPrice=${minPrice}`)
        let products = await JSON.parse(response.res.text);
        console.log(products);
        products.forEach(p => {
            expect(p.price).toBeGreaterThan(minPrice);
        })
        expect(products).toBeInstanceOf(Array);
    });
});