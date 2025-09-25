const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'meu-consumidor',
  brokers: ['localhost:9092'],
});

const topic = 'pedidos';

const consumer = kafka.consumer({ groupId: 'grupo-consumidor' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(`Pedido recebido: ${message.value.toString()}`);
    },
  });
}

run().catch(console.error);

// node consumer.js