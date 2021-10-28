const net = require('net')

const server = net.createServer();

server.on('connection',(socket)=>{
    socket.pipe(socket);
    socket.on('close',()=>{
        console.log('client disconnect');
    })
});

server.listen(3000)
 

const client = net.createConnection(3000)
client.on('data',(data)=>{
    console.log('server responded: ', data.toString());
});

client.write('Hello server !!!!')
client.end('Bye server !!!')
