const Product = require('../models/Product');

const getAll = async (req, res) => {
	const products = await Product.find().lean().exec();
	res.status(200).send({ products });
};

const create = async (req, res) => {
	const { name, size, unitaryPrice, description } = req.body;
	try {
		const product = Product({
			name,
			size,
			unitaryPrice,
			description,
		});

		if (req.file) {
			const { filename } = req.file;
			product.setImgUrl(filename);
		}

		productStored = await product.save();
		res.status(201).send(productStored);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

module.exports = {
	getAll,
	create,
};
