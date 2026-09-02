import express from 'express'
const app = express() // Instanciar Express

app.get('/',(req,res)=>{
    res.send(`<h3>Página Inicial</h3>\n<p>Loja especializada em roupas</p>`)
})

app.get('/roupas',(req,res)=>{
    res.send('Minha ropa de sair')
})

app.listen(3000, () => {console.log('servidor esta vivo')})
