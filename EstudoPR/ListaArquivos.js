import { exec } from "child_process";

// Função que lista os arquivos do diretório atual

function ListarArquivos() {
    const comando = process.platform === "win32" ? "dir" : "ls -la";

    // criação do processo para fazer essa listagem
    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.log(`Erro ao fazer a listagem dos Arquivos: ${error.message}`);
            return;
        } else if (stderr) {
            console.log(`Saida de erro do processo da listagem: ${stderr}`);
            return;
        }
        console.log(`Listagem de arquivos da pasta atual: \n ${stdout}`);
    })
}

ListarArquivos();