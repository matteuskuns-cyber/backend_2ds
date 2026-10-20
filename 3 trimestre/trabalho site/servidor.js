import express from 'express'
const app = express() // Instanciar Express

app.get('/',(req,res)=>{
    res.send(`<h3></h3>\n<p></p>`)
})

app.get('/roupas',(req,res)=>{
    res.send('')
})

app.listen(3000, () => {console.log('servidor esta vivo')})
