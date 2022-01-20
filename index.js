const net = require('net'); 
const HOST = '0.0.0.0'; 
const PORT = 3000; 
const server = new net.Server(); 
server.listen(PORT, HOST);