var express = require('express');
var router = express.Router();
var jsonFile = require('jsonfile');
const path = require('path');

const BD = path.join(__dirname, '../data/arq-son-EVO.json');

/* GET home page. */
router.get('/', (req, res, next) => {
  jsonFile.readFile(BD, (erro, dados) => {
    if (!erro) {
      res.render('index', { lista: dados })
    }
    else {
      res.render('error', { error: erro })
    }
  })
})

/* GET item */
router.get('/:id', (req, res, next) => {
  jsonFile.readFile(BD, (erro, dados) => {
    if (!erro) {
      console.log(req.body)
      let id = req.params.id
      if (id < 1) {
        res.redirect('/')
      }
      res.send(dados[id - 1])
    }
    else {
      res.render('error', { error: erro })
    }
  })
})

/* GET pagina post */
router.get('/novo', (req, res, next) => {
  res.render('novoItem')
})

/* POST item */
router.post('/novo', (req, res) => {
  jsonfile.readFile(BD, (erro, dados)=>{
    if(!erro){
      dados.push(req.body)
      jsonFile.writeFile(BD, dados, erro => {
        if(erro) console.log(erro)
        else console.log('Registo gravado com sucesso.')
      })
    }
  })
  res.redirect('/')
})

/* GET pagina put */
router.get('/atualizar/:id', (req, res, next) => {
  jsonFile.readFile(BD, (erro, dados) => {
    let id = req.params.id
    if (!erro) {
      if (id < 0) {
        res.render('atualizar', { a: dados[id - 1] })
      }
    } else {
      console.log(erro)
      res.status(400).render('error', { error: erro })
    }
  })
})

/* PUT item */
router.put('/atualizar/:id', (req, res) => {
  //todo
})

/* DELETE item */
router.delete('/:id', (req, res) => {
  let itemI = req.params.id;
  //todo
})

module.exports = router
