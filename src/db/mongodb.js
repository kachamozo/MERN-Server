const mongoose = require('mongoose');

mongoose.connection.on('open', () => {
	console.log('db conectado');
});

const connectDb = async ({ host, port, dbName }) => {
	//DB local
	// const uri = `mongodb://${host}:${port}/${dbName}`;

	// DB-Nube mongo atlas
	const uri = process.env.MONGO_URL;
	await mongoose.connect(uri, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
};

module.exports = connectDb;
