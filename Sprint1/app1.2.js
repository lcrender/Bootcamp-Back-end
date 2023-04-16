// Mostrar por consola el resultado de un arrow function autoinvocable que sume dos numeros
console.log(`\nNivel 1\n`)
console.log((( num1, num2 ) => {
    return ( num1 + num2 );
  })( 2, 8 ))

// Crea una arrow function que, recibiendo un parámetro, devuelva un objeto con un atributo que tenga como valor el parámetro recibido.
console.log(`\nNivel 2-1\n`)
const createScenery = (scenary) => {
    let obj = new Object()
    obj.ciudad = scenary
    return obj
}
//Ejemplo para probar la funcion
const ciudadG = createScenery("Ciudad Gotica")
console.log(ciudadG.ciudad)

// Crea una clase "Persona" que reciba un parámetro 'nom' al ser instanciada. La clase incluirá un método llamado Nombre que imprima por consola el parámetro 'nom'. Invoca el método llamado Nombre desde fuera de la clase.
console.log(`\nNivel 2-2\n`)
class Persona {
	nom;
	constructor(nom) {
		this.nom = nom;
	}
	dirNom(nom) {
		return console.log(this.nom);
	}
}
const newPersona = new Persona('Batman');
newPersona.dirNom();

// Escribe una función creadora de objetos que realice instancias de una clase abstracta. Inbócala con diferentes definiciones.
console.log(`\nNivel 3\n`)
class Person {
	constructor() {
		if (this.constructor === Person) {
			throw new Error("Person es una classe abstracta y no puede ser instanciada.");
		}
	}
}
class Espanol extends Person {
	constructor() {
		super();
		this.name = "Español";
	}
}
class Italiano extends Person {
	constructor() {
		super();
		this.name = "Italiano";
	}
}
class Frances extends Person {
	constructor() {
		super();
		this.name = "Frances";
	}
}
function newPerson(name) {
	switch (name) {
	  case 'Español':
		return new Espanol();
	  case 'Italiano':
		return new Italiano();
	  case 'Frances':
		return new Frances();
	  default:
		throw new Error('Esta persona no existe');
	}
  }
  
  let person = newPerson('Italiano');
  
  console.log(person.name);
  console.log(typeof person);