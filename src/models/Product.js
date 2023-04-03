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

module.exports = mongoose.model('Product', ProductSchema);
