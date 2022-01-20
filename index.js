const net = require('net'); 

const HOST = '0.0.0.0'; 
const PORT = 3000; 

const server = new net.Server(); 

server.listen(PORT, HOST);

server.on("listening", () => {
    console.log("server is listening");
});
server.on("connection", () => {
    console.log("connection established");
});