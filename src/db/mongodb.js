const mongoose = require('mongoose');

mongoose.connection.on('open', () => {
	console.log('db conectado');
});

const connectDb = async ({ host, port, dbName }) => {
	const uri = `mongodb://${host}:${port}/${dbName}`;
	await mongoose.connect(uri, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
};

module.exports = connectDb;
