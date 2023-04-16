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
				const employeeName = employees[i].name;
				const employeesFound = { Nombre: employeeName };
				resolve (console.log(employeesFound));
			} else {
				i++;
			}
		} // final del buscador
		if (clientFound === false) {
			reject (new Error('Empleado no encontrado.'));
		}
	}); //final de la promesa
};

async function getSalary(id) {
	return new Promise((resolve, reject) => {
		let i = 0;
		let clientFound = false;
		while (i < employees.length && clientFound === false) {
			if (id === employees[i].id) {
				clientFound = true;
				const employeeSalary = salaries[i].salary;
				const salariesFound = { Salario: employeeSalary };
				resolve(salariesFound);
			} else {
				i++;
			}
		} // termina el buscador
		if (clientFound === false) {
			reject(new Error('Empleado no encontrado. No hay salario para mostrar.'));
		}
	}); //fin promesa
};

module.exports.getEmployee = getEmployee;
module.exports.getSalary = getSalary;