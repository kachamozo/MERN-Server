const mongoose = require('mongoose');
require('dotenv').config();
// const { appConfig } = require('../../config');
const { APP_HOST, APP_PORT } = process.env;

const ProductSchema = mongoose.Schema(
	{
		name: String,
		size: Number,
		unitaryPrice: Number,
		imgUrl: String,
		description: String,
	},
	{
		timestamps: true,
	}
);

ProductSchema.methods.setImgUrl = function (filename) {
	this.imgUrl = `${APP_HOST}:${APP_PORT}/public/${filename}`;
};

// Product es el nombre de la tabla que se crea en base de datos, se crea en minusculas y plural = products
module.exports = mongoose.model('Product', ProductSchema);
