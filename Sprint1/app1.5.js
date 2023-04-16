const fs = require('fs')
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const { spawn } = require('child_process');
const os = require('os');
const {
    
	scrypt,
	randomFill,
	createCipheriv,
    scryptSync,
    createDecipheriv
  } =  require('node:crypto');
  const crypto = require('crypto');
//const { Buffer } = require('buffer');
require('events').EventEmitter.prototype._maxListeners = 100;
// Nivel 1-1
function createFile () {
	return new Promise ((resolve, reject) => {
		let message = `Hola mundo`;
		fs.writeFile('./hello.txt', message, function(err) {
		if (err) {
			reject (new Error(err));
		}
		resolve ('Archivo creado');
		});
	});
};
// Nivel 1-2
let file = './hello.txt'
const readFile = () => {
	fs.readFile(file, 'utf8', (err, data) => {
	  if (err) {
		console.log(err);
	  } else {
		console.log(data);
	  };
	});
  };
// Nivel 1-3
function gzipFile () {
    const gzip = createGzip();
    const source = createReadStream('hello.txt')
    const destination = createWriteStream('hello.txt.gz');
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('Error al intentar crear el archivo:', err);
            process.exitCode = 1;
        } else { console.log("archivo Gzip Creado")}
    });
};
// Nivel 2-1
let sing = (numero) => {
	setTimeout(() => {
		if (numero === 0) {
			return;
		}
		pauseMessage = 'Around the World';
		console.log(pauseMessage);
		return sing(numero - 1);
	}, 1000);
};
//sing(4);
// Nivel 2-2
const homeDirectory = os.homedir();
const listUserFolder = () => {
    const ls = spawn('ls', [homeDirectory]);
    ls.stdout.on('data', (data) => {
        console.log(data.toString());
    });
    ls.stderr.on('data', (data) => {
        console.log(data.toString());
    });
}
//Ejecuto la funcion
//listUserFolder()
// Nivel 3
async function firstStep () {
	return new Promise((resolve, reject) => {
		fs.readFile('./hello.txt', function(err, data) {
			if (err) {
				reject(new Error(err));
			}
			const readFile = data.toString();
			const newBuffer = Buffer.from(readFile);
			const hex = newBuffer.toString('hex');
			const base64 = newBuffer.toString('base64');
			fs.writeFile('./hello.hex.txt', hex, function(err) {
				if (err) {
					reject(new Error(err));
				}
				console.log('Archivo hexadecimal creado');
			});
			fs.writeFile('./hello.base64.txt', base64, function(err) {
				if (err) {
					console.log(err);
				}
				console.log('Archivo base64 creado');
			});
		});
		resolve ("Archivos Codificados");
	});
};
const algorithm = 'aes-192-cbc';
const password = 'alibaba';
const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

function secondStep() {
        //const workFiles = await firstStep()
	const cipher = createCipheriv(algorithm, key, iv);
    const cipher2 = createCipheriv(algorithm, key, iv);
    const inputB64 = createReadStream('./hello.base64.txt');
	const outputB64 = createWriteStream('./hello.base64.enc');
	const inputHex = createReadStream('./hello.hex.txt');
	const outputHex = createWriteStream('./hello.hex.enc');
	pipeline(inputB64, cipher, outputB64, (err) => {})
	pipeline(inputHex, cipher2, outputHex, (err) => {})
	console.log("Archivos encriptados")
}
		  
		

function deleteFiles() {
    fs.unlinkSync('./hello.base64.txt')
    fs.unlinkSync('./hello.hex.txt')
    console.log("Archivos Iniciales Borrados")
}
// Esta funcion no funciona
function extract () {
    const decipher = createDecipheriv(algorithm, key, iv);
    //const decipher2 = createDecipheriv(algorithm, key, iv);
    const inputBase64 = createReadStream('./hello.base64.enc');
    const output = createWriteStream('./hello.base64.txt');
    inputBase64.pipe(decipher).pipe(output);
    // const inputHex = createReadStream('./hello.hex.enc');
    // const output2 = createWriteStream('./hello.hex.txt');
    // inputHex.pipe(decipher2).pipe(output2);
    console.log("Archivos desencriptados")
}

// createFile()
// gzipFile()
// firstStep()
// secondStep()  
// deleteFiles()
// extract()