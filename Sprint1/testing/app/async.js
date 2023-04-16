const fs = require('fs');
let employeeMsg = '';
let salaryMsg = '';
let searchMsg = '';
let printMsg = '';

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

async function getEmployee(id) {
	return new Promise((resolve, reject) => {
		let i = 0;
		let clientFound = false;
		while (i < employees.length && clientFound === false) {
			if (id === employees[i].id) {
				clientFound = true;
				//const employeeName = employees[i].name;
				const employeesFound = `Nombre: ${employees[i].name}`;
				employeeMsg = `Empleado encontrado: ${employeesFound}`;
				resolve(employeesFound);
			} else {
				i++;
			}
		}
		if (clientFound === false) {
			reject(new Error('ERROR 1 Empleado no encontrado.'));
		}
	});
}
async function getSalary(id) {
	return new Promise((resolve, reject) => {
		let i = 0;
		let clientFound = false;
		while (i < employees.length && clientFound === false) {
			if (id === employees[i].id) {
				clientFound = true;
				//const employeeSalary = salaries[i].salary;
				const salariesFound = `Salario: ${salaries[i].salary}`;
				salaryMsg = salariesFound;
				resolve(salariesFound);
			} else {
				i++;
			}
		}
		if (clientFound === false) {
			reject(new Error('ERROR 2 No hay salario para mostrar.'));
		}
	});
}
async function printEmployeer(id) {
	return new Promise((resolve, reject) => {
		let i = 0;
		let clientFound = false;
		while (i < employees.length && clientFound === false) {
			if (id === employees[i].id) {
				clientFound = true;
				let message = `Nombre: ${employees[i].name}
Salario: ${salaries[i].salary}`;
				fs.writeFile('./resumen.app.test.txt', message, function() {
					
					let msgP = 'Archivo Creado';
					printMsg = msgP;
					resolve(printMsg); 
				});   
			} else {
				i++;
			}
            if (clientFound === false) {
                reject(new Error('ERROR 3 Archivo NO creado.'));
            } 
		} 
	});
}

async function search(id) {
	getEmployee(id)
		.catch((err) => {
			return console.log(err.message);
		});
	getSalary(id)
		.catch((err) => {
			return console.log(err.message);
		});
	setTimeout(() => {
		printEmployeer(id)
			.then((res) => {
				return console.log(res);
			})
			.catch((err) => {
				return console.log(err.message);
			});
	}, 2000);
	
	searchMsg = `${employeeMsg}
${salaryMsg}
${printMsg}`;
	return console.log(searchMsg);
}
//busqueda de usuario
search(1);

module.exports.getSalary = getSalary;
module.exports.getEmployee = getEmployee;
module.exports.search = search;
module.exports.printEmployeer = printEmployeer;
