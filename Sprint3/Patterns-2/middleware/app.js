const fs = require('fs');
const path = require('path');
const Middleware = require("./Middleware");
const pathJson = path.join(__dirname, './data.json');
const readJson = () => {
	const data = fs.readFileSync(pathJson, 'utf-8');
	return JSON.parse(data);
};
const data = readJson();
console.log(`\nparametro 1: ${data.param1}`);
console.log(`\nparametro 2: ${data.param2}\n`);

class Maths {
    sumar({a, b}) {
      return a + b;
    }
    restar({a, b}) {
      return a - b;
    }
    multiplicar({a, b}) {
      return a * b;
    }
}

const calc = new Maths();
const app = new Middleware(calc);

app.use((req, next) => {
    req.a = req.a * req.a;
    req.b = req.b * req.b;
    console.log(`parametro 1 al cuadrado ${req.a}`)
    console.log(`parametro 2 al cuadrado ${req.b}`)
    next();
  });
app.use((req, next) => {
    req.a = req.a * req.a * req.a;
    req.b = req.b * req.b * req.b;
    console.log(`parametro 1 al cubo ${req.a}`)
    console.log(`parametro 2 al cubo ${req.b}`)
    next();
  });
  app.use((req, next) => {
    req.a = req.a / req.b;
    req.b = req.b / req.a;
    console.log(`parametro 1 / p.2 = ${req.a}`)
    console.log(`parametro 2 / p.1 = ${req.b}`)
    next();
  });

  console.log(app.sumar({a: data.param1, b: data.param2}));
  console.log(app.restar({a: data.param1, b: data.param2}));
  console.log(app.multiplicar({a: data.param1, b: data.param2}));

// calc.sumar(data.param1, data.param2);
// calc.restar(data.param1, data.param2);
// calc.multiplicar(data.param1, data.param2);