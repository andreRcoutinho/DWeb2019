var mongoose = require('mongoose');

var instrumentoSchema = new mongoose.Schema({
    instrumento: [{
        designacao: String,
        partitura: {
            _type: String,
            _path: String
        }
    }]
})

var obraSchema = new mongoose.Schema({
	titulo: String,
	tipo: String,
    compositor: String,
    instrumentos: [instrumentoSchema],
    _id: String,
});

module.exports = mongoose.model('Obra', obraSchema, 'musicas');
