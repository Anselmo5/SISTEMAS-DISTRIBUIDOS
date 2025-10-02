const net = require('net');

const server = net.createServer(socket => {
    console.log('Cliente conectado');

    socket.write('Bem-vindo ao servidor!\n');

    // Receber mensagens do cliente
    socket.on('data', data => {
        console.log(`Mensagem do cliente: ${data}`);

    });

    // Tratar o encerramento da conexão
    socket.on("end", () => {
        console.log(`Cliente desconectado`);
    });
});

server.listen(8080, () => {
    console.log("Servidor ouvindo na porta 8080");
});

