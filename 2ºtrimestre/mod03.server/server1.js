const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8005
// Carrega o caminho dos arquivos
const home = path.join(_dirname, 'page/index.html')
const sobre = path.join(_dirname, 'page/sobre.html')


const server = http.createServer((req, res) =>{

    const urlTatada = new URL(req.url, `http://${req.headers.host}`)
    const recurso = urlTatada.pathname

    if(recurso === '/'){//pagina inicial
     res.setHeader('Content-Type', 'text/html; charser=utf-8')
     res.statusCode = 200
    return  res.end(fs.readFileSync(home, 'utf-8'))

    }if(recurso === '/sobre'){ //sobre nos
     res.setHeader('Content-Type', 'text/html; charser=utf-8')
     res.statusCode = 200
    return  res.end(fs.readFileSync(sobre, 'utf-8'))

    }else{
     res.setHeader('Content-Type', 'text/html; charser=utf-8')
     res.statusCode = 401
      res.end('<h3>401 Não autorizado!</h3>')

    }


})

server.listen(porta, ()=>{
    console.log(`servidor rodando na porta ${porta}`)
})