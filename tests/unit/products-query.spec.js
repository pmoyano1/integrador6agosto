const request = require('supertest');
const api = require('../../index');

describe('La ruta query-products del ejercicio 3', () => {  
    let baseUrl = `/api/query-products?domain_override=mercadolibre.com.ar&`;

    it('1) Responde con el producto que matchee con el nombre que le enviamos por query', async () => {
        let name = 'Mouse';
        const response = await request(api.app).get(`${baseUrl}name=${name}`);
        let products = await JSON.parse(response.res.text);

        expect(products).toBeInstanceOf(Array);
        expect(products[0].name).toBe('Mouse');
    });

    it('2) Responde con el producto que matchee con el nombre que le enviamos por query y tiene un precio mayor a minPrice', async () => {
        let minPrice = 200;
        let name = 'Notebook';
        const response = await request(api.app).get(`${baseUrl}name=${name}&minPrice=${minPrice}`);
        let products = await JSON.parse(response.res.text);

        products.forEach(p => {
            expect(p.name).toBe('Notebook');
            expect(p.price).toBeGreaterThan(minPrice);
        })
        expect(products).toBeInstanceOf(Array);
    });

    it('3) Devuelve el producto si se encuentra dentro del rango', async () => {
        let minPrice = 1500;
        let maxPrice = 5000;
        let name = 'Notebook';
        const response = await request(api.app).get(`${baseUrl}name=${name}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
        let products = await JSON.parse(response.res.text);

        expect(products).toBeInstanceOf(Array);
        expect(products[0].price).toBeGreaterThanOrEqual(minPrice);
        expect(products[0].price).toBeLessThanOrEqual(maxPrice);
    })

    it('4) Devueve un mensaje de error si no encuentra productos que matcheen', async () => {
        const response = await request(api.app).get(`${baseUrl}name=Benito&minPrice=43534`);
        let msg = await JSON.parse(response.res.text);

        expect(msg).toMatch(/no se encontraron productos/i);
    });

    it('5) Devuelve un mensaje de error si el producto no tiene stock', async () => {
        const response = await request(api.app).get(`${baseUrl}name=Macbook&minPrice=1500`);
        let msg = await JSON.parse(response.res.text);
        
        expect(msg).toMatch(/no se encontraron productos/i);
    });   

});