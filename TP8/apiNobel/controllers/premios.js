var Premio = require('../models/premio');

const Premios = module.exports;

Premios.listar = () => {
	return Premio.find({}, { _id: 0, year: 1, category: 1 }).exec();
};

Premios.listarPremiosDaCategoria = cat => {
	return Premio.find({ category: cat }).exec();
};

Premios.listarPremiosCategoriaAno = (cat, ano) => {
	return Premio.find({ category: cat, year: {$gt: ano }}).exec();
};

Premios.consultar = id => {
	return Premio.findOne({ _id: id }).exec();
};

Premios.categorias = () => {
	return Premio.distinct('category').exec();
};

Premios.laureados = () => {
	return Premio.aggregate()
		.unwind('$laureates')
		.group({
			_id: {
				$concat: ['$laureates.firstname', ' ', '$laureates.surname']
			},
			premio: {
				$push: {
					ano: '$year',
					categoria: '$category'
				}
			}
		})
		.sort({
			_id: 1
		})
		.exec();
};
