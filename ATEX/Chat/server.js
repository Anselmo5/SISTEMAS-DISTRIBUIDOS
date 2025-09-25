const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express(); 
const server = http.createServer(app);
const io = socketIo(server);
const {Worker} = require('worker_threads');
 
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('Novo usuário conectado');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); 

    const worker = new Worker('./worker.js');
    worker.postMessage(msg);

    worker.on('message', (result) => {
      console.log('Mensagem processada pelo worker:', result);
      worker.terminate();
    });
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
