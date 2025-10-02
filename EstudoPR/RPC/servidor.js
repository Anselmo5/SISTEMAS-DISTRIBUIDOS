const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === "POST") {
        let body = '';
        req.on("data", chunk => (body += chunk));
        req.on("end", () => {
            const { metodo, params } = JSON.parse(body);

            let resultado;
            if (metodo === "soma") {
                resultado = params[0] + params[1];
            } else {
                resultado = "Método desconhecido";
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ resultado }));
        })
    }
})


server.listen(3000, () => {
    console.log("Servidor RPC rodando na porta 3000");
});