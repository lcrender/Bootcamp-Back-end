const ctrl = {};
ctrl.exportJson = (req, res) => {
	try {
		const getUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
		return res.status(200).json({
			name: 'Alejandro',
			age: 37,
			url: getUrl
		});
	} catch (error) {
		return res.status(500).json({ message: error });
	}
};
ctrl.uploadFile = (req, res) => {
	try {
		const file = req.file;
		if (file === undefined) {
			return res.status(409).json({ message: 'Tipo de archivo incorrecto o inexistente' });
		} else {
			return res.status(201).json({ message: 'Archivo enviado', file });
		}
	} catch (error) {
		return res.status(500).json({ message: error });
	}
};
ctrl.userTime = (req, res) => {
	try {
		const base64Credentials = req.headers.authorization.split(' ')[1];
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
		const [ user ] = credentials.split(':');
		const date = new Date();
		return res.status(200).json({ user, date });
	} catch (error) {
		return res.status(500).json({ message: error });
	}
};
ctrl.pokemon = async (req, res) => {
	try {
		const { id } = req.params;
		if (isNaN(id)) {
			return res.status(409).json({ message: 'el id debe ser un numero' });
		}
		const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const pokemon = await pokeApi.json();
		if (pokemon === 'undefined') {
			return res.status(404).json({ message: 'pokemon no encontrado' });
		}
		return res.status(200).json({
			name: pokemon.name,
			height: pokemon.height,
			weight: pokemon.weight
		});
	} catch (error) {
		return res.status(404).json({ message: 'Pokemon no encontrado' });
	}
};
ctrl.notFound = (req, res) => {
	return res.status(404).json({ message: 'pagina no encontrada' });
};
module.exports = ctrl;
