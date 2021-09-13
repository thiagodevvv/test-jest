const FunctionQueVaiSerTestada = require('./index')


describe('Testando função que vai ser testada', () => {
    it('Deve retornar statusCode 200 e listOpt ser um array', () => {
       const result = FunctionQueVaiSerTestada();
       expect(result.statusCode).toBe(200);
       expect(result.listOpt).toBeArray();
    });
});






