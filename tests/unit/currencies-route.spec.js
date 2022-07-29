const request = require('supertest');
const api = require('../../index');

describe('La ruta /currencies', () => {  
    let baseUrl = `/api/currencies?domain_override=mercadolibre.com.ar`;

    it('1) Responde con un objeto que contiene la propiedad `currencies`', async () => {
        const response = await request(api.app).get(`${baseUrl}`);
        let currencies = await JSON.parse(response.res.text);

        expect(Object.keys(currencies)).toContain('currencies');
    });

    it('2) La propiedad `currencies` contiene las divisas requeridas', async () => {
        const response = await request(api.app).get(`${baseUrl}`);
        let currencies = await JSON.parse(response.res.text);
        
        expect(currencies.currencies).toEqual(expect.arrayContaining([
            'EUR',
            'USD'
        ]));
    });
});