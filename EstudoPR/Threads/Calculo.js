const { Worker } = require("worker_threads");

const worker = new Worker(`
     const { parentPort } = require("worker_threads");
     let soma = 0;
     for (let i = 0; i <= 1e9; i++){
        soma += i;
     }
        parentPort.postMessage(soma);
    `, { eval: true });

worker.on("message",(Resultado) =>{
    console.log(`Resultado da soma feita: ${Resultado}`);
})

let contator = 0;
setInterval(() =>{
    console.log(`Processo Principal ainda está ativo: (${++contator})`);
},1000);