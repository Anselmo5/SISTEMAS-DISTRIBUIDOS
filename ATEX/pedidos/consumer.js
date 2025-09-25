const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'consumidor-pedidos',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'grupo-pedidos' });
const topic = 'pedidos';

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const pedido = JSON.parse(message.value.toString());
      console.log('Pedido recebido:', pedido);
    },
  });
}

run().catch(console.error);