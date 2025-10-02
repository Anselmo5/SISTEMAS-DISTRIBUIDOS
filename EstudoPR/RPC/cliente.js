const http = require("http");
const data = JSON.stringify({
    metodo: "soma",
    params: [5, 7]
});

const options = {
    hostname: "localhost",
    port: 3000,
    path: "/",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length
    }
};

const req = http.request(options, res => {
    let body = "";
    res.on("data", chunk => (body += chunk));
    res.on("end", () => {
        const resposta = JSON.parse(body);
        console.log("Resultado do RPC:", resposta.resultado);
    })
})

req.write(data);
req.end();

