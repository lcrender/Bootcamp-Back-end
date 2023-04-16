//Nivel 1
function userName(userName) {
	return console.log(userName);
}
userName('aldob');
//Nivel 2
function myName(name, sur) {
	const firstName = name;
	const surName = sur;
	const messageOne = `

Nombre: ${firstName}
Apellido: ${surName}
`;

	return messageOne;
}
console.log(`${myName('Aldo', 'Bonzi')}

Bienvenido al club!
    
`);

//Nivel 3, Ejercicio 1
//Funcion que "contadora" del 0 al 9 por consola
const funcCounter = () => {
	let arrayC = []
	for (i = 0; i < 10; ) {
		arrayC.push(i)
		i = i + 1;
	}
	console.log(arrayC.join())
};
let array = [];
//Funcion que guarda 10 veces la funcion "contadora" en un array y las va ejecutando
const tenFunc = () => {
	for (i = 0; i < 10; ++i) {
		array.push(funcCounter);
	}
	let counter = 0;
	do {
		array[counter]();
		counter++;
	} while (counter < 10);
	return;
};
//Ejecuto funcion
tenFunc();

//Nivel 3, ejercicio 2
autoName = (function(name) {
	console.log(name);
})('Aldo');
