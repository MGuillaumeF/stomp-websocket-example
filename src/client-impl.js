Object.assign(global, { WebSocket: require('ws') });
const stompjs = require("@stomp/stompjs");

const client = new stompjs.Client();

client.configure({
    brokerURL : "ws://localhost:61614/my-websocket-channel",
    debug: console.debug,
    onConnect : (_) => {
        client.subscribe('/my-topic', message => {
            console.log('message received on my-topic', message.body);
        })
    }
});

/*
client.onUnhandledMessage= (...titi) => {
    console.log("Message", ...titi)
};
client.onDisconnect= (...titi) => {
    console.log("Disconnect",...titi)
};
client.onStompError= (...titi) => {
    console.log("StompError", ...titi)
};
client.onWebSocketClose = (...titi) => {
    //console.log('close', ...titi)
};
client.onWebSocketError= (...titi) => {
    console.log('WSError', ...titi)
};
*/
client.activate();

