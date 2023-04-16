const math = require('../app/math.js');
const callback = require('../app/callback.js');
const promise = require('../app/promise.js');
const asyncr = require('../app/async.js');

//TESTING MATH
describe('matematica', () => {
    test('multi 2 * 1 = 2', () => {
        expect(math.multiplicar(2, 1)).toBe(2);
    });
});
describe('matematica', () => {
    test('sumar 1 + 2 = 3', () => {
        expect(math.sumar(1, 2)).toBe(3);
    });
});
describe('matematica', () => {
    test('restar 1 - 2 = -1', () => {
        expect(math.restar(1, 2)).toBe(-1);
    });
});
describe('matematica', () => {
    test('dividir 2 / 2 = 1', () => {
        expect(math.dividir(2, 2)).toBe(1);
    });
});
//TESTINGS CALLBACKS
describe('callbacks', () => {
    test('Si el numero es mayor a 18 es bienvenido, si es menor NO es bienvenido, si no es un numero lo avisa', () => {
        expect(callback.message(18, callback.welcome)).toBe(callback.welcomeMessage);
        expect(callback.message(17, callback.welcome)).toBe(callback.notWelcomeMessage);
        expect(callback.message(isNaN)).toBe(callback.errorMessage);
    });
});
//TESTINGS PROMISES
describe('promise', () => {
test('Este test busca al usuario', async () => {
    await expect(promise.getEmployee(1)).resolves.toBe(promise.employeesFound);
  });
});
describe('promise', () => {
test('la funcion falla con un error al no encontrar al usaurio', async () => {
    expect.assertions(1);
    return promise.getEmployee(9).catch(e => expect(e.message).toBe('Empleado no encontrado.'));
  });
});
//ASYNC
/*
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('async', () => {
    test('Este test encuentra al usuario y su salario', done => {
        expect(setTimeout)(asyncr.search(1)).resolves.toBe(asyncr.searchMsg);
        return expect(setTimeout)(asyncr.search(1)).resolves.toBe(asyncr.searchMsg);
done()
       // async.search(1)
     //   expect(setTimeout).toHaveBeenLastCalledWith(expect(async.printEmployeer), 2000);
        
//        const data = await async.printEmployeer
        //await async.printEmployeer
        //jest.useFakeTimers({setTimeout})
        
        //await expect(setTimeout)(async.search(1)).resolves.toBe(async.searchMsg);
        
      });
    });
    
/*
describe('async', () => {
    test('este test NO encuentra al usuario ni a su salario y da 2 errores', async () => {
        return async.search(9).catch(m => expect(m.message).toBe(`ERROR 1 Empleado no encontrado.
ERROR 2 No hay salario para mostrar.
ERROR 3 Archivo NO creado.`));
    });
});*/
