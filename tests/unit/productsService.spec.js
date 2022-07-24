const productsService = require('../../services/productsService');
const restclient = require('nordic/restclient');

jest.mock('nordic/restclient', () => () => ({
    get: jest.fn()
        .mockResolvedValueOnce(Promise.resolve({ 
            data: {
                results: [{ id: 'MLA23255', title: 'Samsung '}]
            }}))
        .mockRejectedValueOnce('Error 403')
}));

describe('producsService', () => {
    it('1) Devuelve un array de productos', () => {
        return productsService.getProducts('MLA', 'celular', 10)
            .then(response=> {
                expect(response).toBeInstanceOf(Array);
            });
    });

    it('2) Arroja un error cuando falla la llamada', () => {
        return productsService.getProducts('celular', 10)
            .catch(err => {
                expect(err).toBeInstanceOf(Error)
            });
    });
});