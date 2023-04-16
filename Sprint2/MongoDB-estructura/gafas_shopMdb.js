db.createCollection("proveedores");
db.createCollection("clientes");
db.proveedores.insertMany([
	{
		nombre: 'Proveedores del Sur',
		direccion: {
			calle: 'Parera',
			numero: 2526,
			ciudad: 'Barcelona',
			cp: 'A3232',
			pais: 'España'
		},
		telefono: '3433-2323',
		nif: 23232,
		gafas: [
			{
				_id: ObjectId('000000000001'),
				marca: 'Vulk',
				cristal: "grueso",
				montura: 'flotante',
				color_montura: 'verde',
				color_vidrio: 'negro',
				precio: 200
			},
			{
				_id: ObjectId('000000000002'),
				marca: 'Vulk',
				cristal: "fino",
				montura: 'flotante',
				color_montura: 'naranja',
				color_vidrio: 'negro',
				precio: 180
			}
		]
	},
	{
		nombre: 'Proveedores del Norte',
		direccion: {
			calle: 'Queseyo',
			numero: 21,
			ciudad: 'Barcelona',
			cp: 'A3232',
			pais: 'España'
		},
		telefono: '3433-2222',
		nif: 23242,
		gafas: [
			{
				_id: ObjectId('000000000003'),
				marca: 'Jorguito',
				cristal: "grueso",
				montura: 'flotante',
				color_montura: 'Azul',
				color_vidrio: 'Marron',
				precio: 220
			},
			{
				_id: ObjectId('000000000004'),
				marca: 'Jorguito',
				cristal: "fino",
				montura: 'flotante',
				color_montura: 'naranja',
				color_vidrio: 'negro',
				precio: 150
			}
		]
	}
]);
db.clientes.insertMany([
	{
		nombre: 'Juan Cruz Peralta',
		direccion: {
			calle: 'Bolivar',
			numero: 12,
			ciudad: 'Barcelona',
			cp: 'A3232',
			pais: 'España'
		},
		telefono: '1234-2323',
		email: 'peralta@gmail.com',
        fecha_registro: ISODate('2021-10-19T18:56:20.197Z'),
		recomendado:false,
		ventas: [
			{
				_id_gafa: ObjectId('000000000001'),
				_id_empleado: ObjectId('e00000000001'),
				empleado:"Martin Garcia",
                fecha: ISODate('2021-10-19T18:58:20.197Z')
			},
		]
	},
	{
		nombre: 'Mateo Lopez',
		direccion: {
			calle: 'Pirulo',
			numero: 221,
			ciudad: 'Barcelona',
			cp: 'A3232',
			pais: 'España'
		},
		telefono: '6000-2222',
		email: "pirulo@gmail.com",
        fecha_registro: ISODate("2021-11-19T18:56:22.197Z"),
		recomendado:true,
		nombre_recomendacion:'Juan Cruz Peralta',
		ventas: [
			{
				_id_gafa: ObjectId('000000000002'),
				_id_empleado: ObjectId("e00000000001"),
				empleado:"Martin Garcia",
                fecha: ISODate("2021-12-19T18:58:20.197Z")
			}
		]
	}
]);
