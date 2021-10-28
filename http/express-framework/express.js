const { response } = require('express')
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.get('/',(req,res)=>{
    res.set({
        'Content-Type':'application/json'
    })
    fs.createReadStream(path.join(__dirname,'data/cities.json')).pipe(res)
})

app.get('/:id',(req,res)=>{
    console.log(req.params);
})

app.listen(3000,()=> console.log('Listen on 3000'))