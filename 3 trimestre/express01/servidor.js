import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.send('Home OK!')
})

app.get('/roupas',(req,res)=>{
    res.send('Minha ropa de sair')
})

app.listen(3000, () => {console.log('servidor esta vivo')})
