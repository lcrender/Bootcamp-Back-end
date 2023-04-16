let balance = 10;
function haveBalance () {
	return new Promise( ( resolve, reject ) => {
	  if ( balance > 0 ) {
		resolve( "Su saldo es de " + balance + " Euros" );
	  } else {
		reject( "No hay saldo en su cuenta" );
	  };
	});
  };
  
  haveBalance()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

//////////////////////////////////////
console.log(`\nNivel 1 Ejercicio 2 \n`)
//Funcion Callback
let msg = ""
const welcome = (msg) => {
	console.log(msg);
};
const message = (age, welcome) => {
	const userAge = age;
	if (isNaN(userAge)) {
		let msg = 'ERROR: La edad debe ser un numero';
		welcome(msg)
	}
	if (age >= 18) {
		let msg = "Mensaje de bienvenida:\nTienes mas de 18 años, eres bienvenido al club.\n\n";
		welcome(msg)
	} else {
		let msg = "Mensaje de rechazo:\nTienes menos de 18 años, NO eres bienvenido.\n\n";
		welcome(msg)
	}
};
//La funcion message va seguida de una edad y una funcion callback, en este caso un mensaje de bienvenida al club si es mayor o igual de 18 años.
//Primer mensaje
message('20', welcome);
//Segundo mensaje
message('17', welcome);
//////////////////////////////////////
//Nivel 2 y 3
console.log('Nivel 2 y 3\n');
let employees = [
	{
		id: 1,
		name: 'Linux Torvalds'
	},
	{
		id: 2,
		name: 'Bill Gates'
	},
	{
		id: 3,
		name: 'Jeff Bezos'
	}
];
let salaries = [
	{
		id: 1,
		salary: 4000
	},
	{
		id: 2,
		salary: 1000
	},
	{
		id: 3,
		salary: 2000
	}
];
const getEmployee = (id) => {
	return new Promise((resolve, reject) => {
	  let employee = employees.find((e) => e.id === id);
	  if (employee) {
		resolve(employee);
	  } else {
		reject("Empleado no encontrado");
	  }
	} );
  };
  
  const getSalary = (empleado) => {
	return new Promise((resolve, reject) => {
	  let {id} = empleado;
	  let salary = salaries.find((s) => s.id === id );
	  if (salary) {
		resolve(salary);
	  } else {
		reject("Salario no encontrado");
	  };
	});
  };

getEmployee(2)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
  

getEmployee(1)
  	.then((res) => {console.log( {employee: res});
	getSalary(res)
	.then((res) => {console.log({salary: res})});
	});
  
getEmployee(8)
	.then((res) => {console.log({employee: res});
	getSalary(res)
	.then((res) => {console.log({salary: res})});
	})
	.catch((err) => console.log(err));