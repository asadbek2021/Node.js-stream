const http = require('http')
const fs = require('fs')
const path = require('path')

const {createDirTemplate} = require('./helpers')
const server = http.createServer();

server.on('request',(request,response)=>{
    const requestUrl = path.join(__dirname,request.url)

    fs.stat(requestUrl,(rer,stats)=>{
        if(!stats){
            response.end(`${requestUrl} do not exist`);

        }else if(!stats.isDirectory()){
            const readable = fs.createReadStream(requestUrl);
            readable.pipe(response);
        }
        else{
            fs.readdir(requestUrl,(err,dir)=>{
                response.end(createDirTemplate(dir,requestUrl))
            })
        }
    })
});
 
server.listen(3000);
