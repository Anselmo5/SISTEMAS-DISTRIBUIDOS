// Importamos o modulo do child_process porque ele nos permite fazer esse controle dos processos do sistema operacional
const { exec } = require("child_process");
const { stdout, stderr } = require("process");

// função que iria iniciar a calculadora
function IniciarCalculadora() {
    // para cada sistema operacional, o comando para iniciar a calculadora é diferente:
    // windows: calc,linux: gnome-calculator, mac: open -a Calculat or

    const comando = process.platform === "win32 " ? "calc" :
        process.platform === "darwin" ? "open -a Calculator" : "gnome-calculator"

    //  faz a execução no sistema operacional
    exec(comando,(error,stdout,stderr) =>{
        if (error) {
            console.error(`Erro ao abrir a calculadora: ${error.message}`);
            return;
        } else if (stderr) {
            console.log(`Erro no processo: ${stderr}`);
        }
  
            console.log("Calculadora iniciada com sucesso!");
     
    })
}

IniciarCalculadora();

