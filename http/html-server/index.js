const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer();

server.on('request',(request,response)=>{
    const readStream = fs.createReadStream(path.join(__dirname,'index.html'));
    readStream.pipe(response)
})

server.listen(3000)