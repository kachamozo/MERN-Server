const app = require('./src/app');
require('dotenv').config();
const connectDb = require('./src/db/mongodb');
const { dbConfig } = require('./config');

const port = process.env.APP_PORT;

const initApp = async (dbConfig, port) => {
	try {
		await connectDb(dbConfig);
		app.listen(port, () => {
			console.log(`Escuchando en el puerto ${port}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(0);
	}
};

initApp(dbConfig, port);
