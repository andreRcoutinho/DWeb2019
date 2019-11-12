var express = require("express");
var router = express.Router();
var axios = require("axios");

const APIKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ";

/* GET home page. */
router.get("/", (req, res) => {
  axios
    .get(
      "http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ"
    )
    .then(dados => res.render("index", { lista: dados.data }))
    .catch(erro => res.render("error", { error: erro }));
});

router.get("/:id", (req, res) => {
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
          axios
            .get(
              `http://clav.dglab.gov.pt/api/entidades/${req.params.id}/intervencao/dono?apikey=${APIKEY}`
            )
            .then(dono => {
              axios
                .get(
                  `http://clav.dglab.gov.pt/api/entidades/${req.params.id}/intervencao/participante?apikey=${APIKEY}`
                )
                .then(participante =>
                  res.render("entidade", {
                    entidade: entidade.data,
                    tipologia: tipologia.data,
                    dono: dono.data,
                    participante: participante.data
                  })
                )
                .catch(erro => res.render("error", { error: erro }));
            })
            .catch(erro => res.render("error", { error: erro }));
        })
        .catch(erro => res.render("error", { error: erro }));
    })
    .catch(erro => res.render("error", { error: erro }));
});

module.exports = router;
