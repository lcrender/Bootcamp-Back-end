const express = require('express');
const app = express();
const cors = require('cors');
// Settings
app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/auth.routes'));
app.use(require('./routes/game.routes'));
app.use(require('./routes/player.routes'));
app.use((req, res, next) => {
	res.status(404).json({ message: 'endpoint not found' });
});
module.exports = app;