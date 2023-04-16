const basicAuth = (req, res, next) => {
	if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
		return res.status(401).json({ message: 'Missing Authorization Header' });
	} else {
		const base64Credentials = req.headers.authorization.split(' ')[1];
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
		const [ user, pass ] = credentials.split(':');
		if (user === process.env.USERNAME && pass === process.env.PASS) {
			next();
		} else {
			return res.status(401).json({ message: 'Invalid Authentication Credentials' });
		}
	}
};

module.exports = basicAuth;