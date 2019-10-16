/* 
GET
/       -> pag.principal
/w3.css -> enviar a folha de estilo
/pug    -> logo
/favicon.ico

POST
/tarefa 
*/

var http = require('http')
var url = require('url')
var pug = require('pug')
var fs = require('fs')
var jsonfile = require('jsonfile')
var { parse } = require('querystring')

const PORT = 8080
var myBD = 'tarefas.json'

http.createServer((req, res) => {
    var purl = url.parse(req.url, true)

    console.log(req.method + ' ' + purl.pathname)

    if (req.method == 'GET') {
        if (purl.pathname == '/') {
            jsonfile.readFile(myBD, (erro, tarefas) => {
                res.writeHead(200, {
                    'Content-Type': 'text/html, charset=utf-8'
                })
                if (!erro)
                    res.write(pug.renderFile('spa.pug', { lista: tarefas }))
                else
                    res.write(pug.renderFile('erro.pug', { e: 'Erro na leitura da BD' }))

                res.end()
            })
        } else if (purl.pathname == '/w3.css') {
            res.writeHead(200, {
                'Content-Type': 'text/css'
            })
            fs.readFile('assets/w3.css', (erro, dados) => {
                if (!erro)
                    res.write(dados)
                else
                    res.write('<p>Erro: ' + erro + '</p>')

                res.end()
            })
        } else if (purl.pathname == '/pug') {
            res.writeHead(200, {
                'Content-Type': 'image/png'
            })
            fs.readFile('assets/pug.png', (erro, dados) => {
                if (!erro)
                    res.write(dados)
                else
                    res.write(pug.renderFile('erro.pug', { e: 'Erro a carregar imagem' }))

                res.end()
            })
        } else if (purl.pathname == '/favicon.ico') {
            res.writeHead(200, {
                'Content-Type': 'image/x-icon'
            })
            fs.readFile('assets/favicon.ico', (erro, dados) => {
                if (!erro)
                    res.write(dados)
                else
                    res.write(pug.renderFile('erro.pug', { e: 'Erro a carregar favicon' }))

                res.end()
            })
        }
    } else if (req.method == 'POST') {
        //303 See Other - atualizar lista de imediato
        res.writeHead(303, {
            'Location': '/'
          })
        if (purl.pathname == '/tarefa') {
            recuperaInfo(req, resultado => {
                jsonfile.readFile(myBD, (erro, tarefas) => {
                    if (!erro) {
                        tarefas.push(resultado)
                        jsonfile.writeFile(myBD, tarefas, erro => {
                            if (erro)
                                console.log(erro)
                            else
                                console.log('Tarefa registada com sucesso!')
                        })
                    }
                })
            })
        }
        res.end()
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html, charset=utf-8'
        })
        console.log('ERRO: ' + req.method + 'não suportado...')
        res.write(pug.renderFile('erro.pug',
            { e: 'ERRO: ' + req.method + 'não suportado...' }))
        res.end()
    }
}).listen(PORT, () => {
    console.log(`server start at port ${PORT}`)
})

function recuperaInfo(request, callback) {
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded') {
        let body = ''
        request.on('data', bloco => {
            body += bloco.toString()
        })
        request.on('end', () => {
            callback(parse(body))
        })
    }
}