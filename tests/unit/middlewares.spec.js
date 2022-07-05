const {logPath,supportedCurrencies} = require('../../api/2-currencies/middlewares');
const httpMocks = require('node-mocks-http');


describe('logPath',()=>{
    const req = httpMocks.createRequest({method: 'GET', url:'/api/currencies'});
    const res = httpMocks.createResponse();
    const mockConsole = jest.spyOn(console, 'log');

    it('Debería imprimir en consola el path de la request',()=>{
        return logPath(req,res,()=>{
            expect(mockConsole).toHaveBeenCalled()
            expect(mockConsole).toHaveBeenCalledWith(req.originalUrl || req.baseUrl)
        })
    })
   
})
describe('supportedCurrencies',()=>{
    const req = httpMocks.createRequest({method: 'GET', url:'/api/currencies'});
    const res = httpMocks.createResponse();
    

    it('Debería guardar en res.locals.currencies un objecto con un array de monedas (EUR,USD)',()=>{
        return supportedCurrencies(req,res,()=>{
            const locals = res.locals.currencies.currencies;

            expect(typeof res.locals.currencies).toBe('object')
            expect(locals).toEqual(expect.arrayContaining(["EUR","USD"]))
        })
    })
   
})