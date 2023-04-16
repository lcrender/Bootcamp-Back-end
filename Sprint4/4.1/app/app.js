require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const storage = require('./middlewares/multerStorage');
const multer = require('multer');
const addHeaders = require('./middlewares/headers');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	multer({
		storage: storage,
		dest: path.join(__dirname, '../public/uploads'),
		fileFilter: (req, file, cb) => {
			const filetypes = /jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF/;
			const mimetype = filetypes.test(file.mimetype);
			const extname = filetypes.test(path.extname(file.originalname));
			if (mimetype && extname) {
				return cb(null, true);
			}
			console.log('Error tipo de archivo no aceptado.');
			return cb(null, false);
		}
	}).single('image')
);
app.use(addHeaders);

// Routes
app.use(require('./routes/routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));