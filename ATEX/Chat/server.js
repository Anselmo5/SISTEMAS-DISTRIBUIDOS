const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('Novo usuário conectado');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // envia para todos
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

// comandos: node server.js
// abrir o localhost:3000 que vai abriro html com o chat ali
