const net = require('net'); 

const HOST = '0.0.0.0'; 
const PORT = 3000; 

const server = new net.Server((socket) => {
    socket.on("data", (data) => {
        console.log(`received data ${data}`);
        console.log(`from host: ${socket.remoteAddress}, port: ${socket.remotePort}`);
    })
}); 

server.listen(PORT, HOST);

server.on("listening", () => {
    console.log("server is listening");
});
server.on("connection", () => {
    console.log("connection established");
});

const client = new net.Socket();
client.connect(PORT, HOST);
client.write("hello");
client.on("data", (data) => {
  console.log(`receive from server: "${data}"`);
});
