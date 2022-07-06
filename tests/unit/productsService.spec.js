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
    it('1) Devuelve un array de productos', async () => {
        try {
            const response = await productsService.getProducts('MLA', 'celular', 10);
            expect(response).toBeInstanceOf(Array);
        } catch(err) {
            console.log(err);
        }
    });

    it('2) Arroja un error cuando falla la llamada', async () => {
        try {
            const response = await productsService.getProducts('celular', 10);
        } catch(err) {
            expect(err).toBeInstanceOf(Error);
        }
    })
});