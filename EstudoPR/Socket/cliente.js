const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
    console.log("Conectado ao servidor!");
    client.write("Olá servidor!");
})

client.on("data", data => {
    console.log(`Mensagem do servidor: ${data}`);
})