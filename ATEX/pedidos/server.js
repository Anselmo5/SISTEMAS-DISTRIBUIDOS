const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/public'))

const pedidosRecebidos = [] 

app.get('/pedidos', (req, res) => {
  res.json(pedidosRecebidos) 
})

app.post('/pedidos', (req, res) => {
  const pedido = req.body
  pedidosRecebidos.push(pedido)
  res.status(201).json({ message: 'Pedido recebido', pedido })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})


// comandos: node server.js
// abrir o localhost:3000 que vai abriro html dos pedidos