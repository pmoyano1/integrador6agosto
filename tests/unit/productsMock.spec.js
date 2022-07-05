const products = require('../../utils/productsMock');

describe('Mockear Productos',()=>{
    it('Deberia ser un array',()=>{
        expect(products).toBeInstanceOf(Array)
    })
    it('Deberia tener cuatro productos',()=>{
        expect(products.length).toBe(4)
    })
    it('Los productos deben tener id,title,description,price y quantity',()=>{
      
        ['id','title','price','description','quantity'].forEach((x) =>{
            expect(products[0]).toHaveProperty(x)
            expect(products[1]).toHaveProperty(x)
            expect(products[2]).toHaveProperty(x)
            expect(products[3]).toHaveProperty(x)
        })
    })
})