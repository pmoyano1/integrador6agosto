const { fetchProducts } = require('../../app/pages/home/controller');
const { createRequest, createResponse } = require('node-mocks-http');
const restclient = require('nordic/restclient');

jest.mock('nordic/restclient', () => () => ({
    get: jest.fn()
        .mockResolvedValueOnce(Promise.resolve({ data: { results: [
            {
                id: 'MLA23420',
                title: 'Motorola'
            },
            {
                id: 'MLA23421',
                title: 'Samsung'
            },
            {
                id: 'MLA23422',
                title: 'Huawei'
            },
            {
                id: 'MLA23423',
                title: 'iPhone'
            },
            {
                id: 'MLA23424',
                title: 'Samsung2'
            },
            {
                id: 'MLA23425',
                title: 'Nokia'
            },
            {
                id: 'MLA23426',
                title: 'LG'
            },
            {
                id: 'MLA23427',
                title: 'Sony'
            },
            {
                id: 'MLA23428',
                title: 'Motorola2'
            },
            {
                id: 'MLA23429',
                title: 'Moto-G'
            },
        ] 
    }}))
}));

describe('El middleware fetchProducts', () => {
    const req = createRequest({
        method: 'GET',
        url: '/home',
        platform: {
            siteId: 'MLA'
        }
    });
    const res = createResponse();
    
    it('1) Guarda un array de producos en res.locals.products', () => {
        return fetchProducts(req, res, () => {
            expect(res.locals.products).toBeInstanceOf(Array);
        })
    });
});