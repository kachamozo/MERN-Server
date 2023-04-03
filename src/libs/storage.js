const multer = require('multer');
const { extname } = require('path');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './src/storage/imgs');
	},
	filename: function (req, file, cb) {
		// console.log(file);
		// capturamos la extension de la imagen(.png  .jpg)
		const fileExt = extname(file.originalname);
		// capturamos el nombre del archivo
		const fileName = file.originalname.split(fileExt)[0];
		// le agregamos la hora para que no haya problemas al subir archivos con el mismo nombre
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		// generamos el nombre completo del archivo a guardar
		cb(null, `${fileName}-${uniqueSuffix}${fileExt}`);
	},
});

// Subimos el archivo utlizando la funcion storage
const upload = multer({ storage: storage });

module.exports = upload;
