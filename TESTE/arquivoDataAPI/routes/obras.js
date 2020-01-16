var express = require('express');
var router = express.Router();
var Obras = require('../controllers/obras');

/* GET users listing. */
router.get('/obras', (req, res) => {
	if (req.query.compositor) {
		Obras.obrasCompositor(req.query.compositor)
			.then(dados => res.jsonp(dados))
			.catch(erro => res.status(500).jsonp(erro));
	} else if (req.query.instrumento) {
		Obras.obrasInstrumento(req.query.instrumento)
			.then(dados => res.jsonp(dados))
			.catch(erro => res.status(500).jsonp(erro));
	} else {
		Obras.listar()
			.then(dados => res.jsonp(dados))
			.catch(erro => res.status(500).jsonp(erro));
	}
});

router.get('/obrasQuant', (req, res) => {
  Obras.quantidade()
		.then(dados => res.jsonp(dados))
		.catch(erro => res.status(500).jsonp(erro));
});

router.get('/obras/:id', (req, res) => {
	if (req.params.id) {
		Obras.consultar(req.params.id)
			.then(dados => res.jsonp(dados))
			.catch(erro => res.status(500).jsonp(erro));
	}
});

router.get('/tipos', (req, res) => {
	Obras.tipos()
		.then(dados => res.jsonp(dados))
		.catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
