var Obra = require('../models/obra');

const Obras = module.exports;

Obras.listar = () => {
	return Obra.find(
		{},
		{ id: 1, titulo: 1, tipo: 1, compositor: 1, instrumentos: 1 }
	).exec();
};

Obras.consultar = id => {
	return Obra.find({ _id: id }).exec();
};

Obras.tipos = () => {
	return Obra.distinct('tipo').exec();
};

Obras.obrasCompositor = comp => {
	return Obra.find({ compositor: comp }).exec();
};

Obras.obrasInstrumento = instrumento => {
	return Obra.aggregate([
		{
			$match: {
				'instrumento.designacao': instrumento
			}
		},
		{
			$count: 'numPartituras',
			$gte: 1
		}
	]).exec();
};

Obras.quantidade = () => {
	return Obra.aggregate([
		{ $group: { _id: "$instrumentos.instrumento.partitura", nPartituras: { $sum: 1 } } },
		{ $project: { _id: 1, titulo: 1, nPartituras: 1 } }
	]).exec();
};
