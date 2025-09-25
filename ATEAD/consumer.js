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
// docker exec kafka kafka-topics --create --topic pedidos --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1