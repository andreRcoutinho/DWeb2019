/*
GET /api/premios - Devolve a lista de prémios apenas com os campos "year" e "category";
GET /api/premios/:id - Devolve a informação completa de um prémio;
GET /api/categorias - Devolve a lista de categorias, sem repetições;
GET /api/premios?categoria=YYY - Devolve a lista de prémios que tenham o campo "category" com o valor "YYY";
GET /api/premios?categoria=YYY&data=AAAA - Devolve a lista de prémios que tenham o campo "category" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";
GET /api/laureados - Devolve uma lista ordenada alfabeticamente por nome dos laureados com os campos correspondentes ao nome, ano do prémio e categoria.
*/

var express = require('express');
var router = express.Router();
var Premios = require('../controllers/premios');

/* GET premios */
router.get('/premios', (req, res) => {
	if (req.query.categoria && req.query.ano) {
		Premios.listarPremiosCategoriaAno(req.query.categoria, req.query.ano)
			.then(dados => res.jsonp(dados))
			.catch(erro => res.status(500).jsonp(erro));
	} else if (req.query.categoria) {
		Premios.listarPremiosDaCategoria(req.query.categoria)
			.then(dados => res.jsonp(dados))
			.catch(erro => res.status(500).jsonp(erro));
	} else {
		Premios.listar()
			.then(dados => res.jsonp(dados))
			.catch(erro => res.status(500).jsonp(erro));
	}
});

/* GET info premio */
router.get('/premios/:id', (req, res) => {
	Premios.consultar(req.params.id)
		.then(dados => res.jsonp(dados))
		.catch(erro => res.status(500).jsonp(erro));
});

/* GET categorias */
router.get('/categorias', (req, res) => {
	Premios.categorias()
		.then(dados => res.jsonp(dados))
		.catch(erro => res.status(500).jsonp(erro));
});

/* GET laureados */
router.get('/laureados', (req, res) => {
	Premios.laureados()
		.then(dados => res.jsonp(dados))
		.catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
