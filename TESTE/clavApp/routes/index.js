var express = require('express');
var router = express.Router();
var axios = require('axios');

const APIKEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ';

router.get('/', (req, res) => {
	axios
		.get(`http://clav-api.dglab.gov.pt/api/entidades?apikey=${APIKEY}`)
		.then(dados => {
			res.render('index', { lista: dados.data });
		})
		.catch(erro => {
			res.render('error', { error: erro });
		});
});


router.get('/:id', (req, res) => {
	axios
		.get(
			`http://clav.dglab.gov.pt/api/entidades/${req.params.id}?apikey=${APIKEY}`
		)
		.then(entidade => {
			axios
				.get(
					`http://clav.dglab.gov.pt/api/entidades/${req.params.id}/tipologias?apikey=${APIKEY}`
				)
				.then(tipologia => {
					res.render('entidade', {
						entidade: entidade.data,
            tipologia: tipologia.data,
            id: req.params.id
					});
				})
				.catch(erro => res.render('error', { error: erro }));
		})
		.catch(erro => res.render('error', { error: erro }));
});

module.exports = router;
