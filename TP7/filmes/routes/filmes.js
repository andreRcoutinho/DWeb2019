/*
GET
  /filmes
  /filmes/:idFilme  

POST
  /filmes  --> req.body

DELETE
  /filmes/:idFilme

PUT
  /filmes/:idFilme
*/


var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filmes')

/* GET home page. */
router.get('/filmes', (req, res) => {
  Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* GET dados dum filme */
router.get('/:idFilme', (req, res) => {
  Filmes.consultar(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* POST novo filme */
router.post('/filmes', (req, res) => {
  var body = req.body
  Filmes.registar(body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* DELETE filme */
router.delete('/filmes/:idFilme', (req, res) => {
  Filmes.apagar(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* ATUALIZAR filme */
router.put('/filmes/:idFilme', (req, res) => {
  Filmes.atualizar(req.params.idFilme, req)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
