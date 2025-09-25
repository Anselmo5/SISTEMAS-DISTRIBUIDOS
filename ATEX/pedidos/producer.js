const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'produtor-pedidos',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();
const topic = 'pedidos';

async function sendPedido(pedido) {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(pedido) }],
  });
  console.log('Pedido enviado:', pedido);
  await producer.disconnect();
}

// Exemplo de envio
const pedido = {
  id: Date.now(),
  cliente: 'João',
  valor: 99.99
};

sendPedido(pedido).catch(console.error);