const Product = require('./product');
const EuroPrice = require('./decorator');

let mochila = new Product('Mochila', 20, 'usd');
let reloj = new Product('Reloj', 120, 'gbp');
let cadena = new Product('Cadena de oro', 300, 'jpy');
let pulsera = new Product('Pulsera Hippie', 11, 'cad');
let mtanga = new Product('Micro tanga violeta', 10, 'cny');
console.table([ mochila, reloj, cadena, pulsera, mtanga ]);

mochila = new EuroPrice(mochila);
reloj = new EuroPrice(reloj);
cadena = new EuroPrice(cadena);
pulsera = new EuroPrice(pulsera);
mtanga = new EuroPrice(mtanga);
//Esta bien que el producto quede dentro de otro objeto? @logger porq hacen esto?
console.table([ mochila ]);
mochila.convert();
reloj.convert();
cadena.convert();
pulsera.convert();
mtanga.convert();
console.table([ mochila.product, reloj.product, cadena.product, pulsera.product, mtanga.product ]);
