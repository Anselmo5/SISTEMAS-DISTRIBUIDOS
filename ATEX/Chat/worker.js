const {parentPort } = require('worker_threads');

parentPort.on('message',(msg) => {
    console.log("Processando mensagem do worker chat:",msg)
    parentPort.postMessage("Mensagem que foi processada:"  +msg)
}) 