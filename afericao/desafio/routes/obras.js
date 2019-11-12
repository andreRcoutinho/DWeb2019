/*
GET /obras
    /obras?ano=X
    /obras?compositor=Y&duracao=Z
    /obras?periodo=A
    /obras/:id

    /compositores
    /periodos
*/

var express = require("express");
var router = express.Router();
var Obras = require("../controllers/obras");

/* GET home page. */
router.get("/obras", (req, res) => {
  if (req.query.compositor && req.query.duracao) {
    Obras.obrasDoCompositorComDuracao(req.query.compositor, req.query.duracao)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else if (req.query.ano) {
    Obras.obrasDoAno(req.query.ano)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else if (req.query.periodo) {
    Obras.obrasDoPeriodo(req.query.periodo)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else {
    Obras.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
});

router.get("/obras/:id", (req, res) => {
  if (req.params.id) {
    Obras.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
});

router.get("/compositores", (req, res) => {
  Obras.compositores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.get("/periodos", (req, res) => {
  Obras.periodos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
