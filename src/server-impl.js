const http = require("http");
const StompServer = require('stomp-broker-js');

const server = http.createServer();
const stompServer = new StompServer({server: server, path : '/my-websocket-channel', debug : console.log});

server.listen(61614);

setInterval(() =>{
   stompServer.send('/my-topic', {}, 'testMsg');
   console.log('send testMsg')
 }, 3000)