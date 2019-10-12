var http = require('http')
var fs = require('fs')

const PORT = 7777

var xsl = fs.readFileSync('arq2html.xsl')
var index = fs.readFileSync('index.html')

http.createServer((req, res) => {
    
    let partes = req.url.split('/')
    let pag = partes[partes.length - 1]

    if (pag.match(/arq2html.xsl/)) {
        res.writeHead(200, {
            'Content-Type': 'text/xsl'
        })
        res.write(xsl)
        res.end()
    } else if (pag.match(/[0-9]+/)){
        fs.readFile(`dataset/arq${pag}.xml`, (err, data) => {
            if (err) {
                console.log(err)
            }
            res.writeHead(200, { 'Content-Type': 'text/xml, charset=utf-8' })
            res.write(data)
            res.end()
        })
    } else { 
        res.writeHead(200, {
            'Content-Type': 'text/html, charset=utf-8'
        })
        res.write(index);
        res.end()
    }

}).listen(PORT, () => {
    console.log(`server start at port ${PORT}`)
})

