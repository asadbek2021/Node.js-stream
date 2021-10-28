const http = require('http')
const fs = require('fs')
const path = require('path')


const cities = [
    {name:'Minsk',country:'Belarus',capital: true},
    {name:'Brest',country:'Belarus',capital: false},
    {name:'Paris',country:'France',capital: true},
];
const users = [
    {name:'Jalol',job:'student',age: 15},
    {name:'Fattoh',job:'teacher',age: 23},
    {name:'Jalol',job:'plumber',age: 22},
];

const server = http.createServer();
server.on('request',(request,response)=>{

    if(request.method !== 'GET'){
        response.writeHead(400,{
            'Content-Type':'text/plain'
        });
        response.end(`${request.method} is not supported`)
    }
    switch(request.url){
        case '/users':
            response.writeHead(200,{
                'Content-Type':'application/json'
            });
            response.end(JSON.stringify(users))
            break;
        case '/cities':
            response.writeHead(200,{
                'Content-Type':'application/json'
            });
            response.end(JSON.stringify(cities));
            break;
        default :
        response.writeHead(404,{
            'Content-Type':'text/plain'
        });

        response.end(`${request.url} not supported`)

    }
});

server.listen(3000)