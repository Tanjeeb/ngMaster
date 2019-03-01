const express=require('express');
const bodyParser= require('body-parser');
const http=require('http');
const path=require('path');
const app=express();

//Call parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({msExtendedCode: false}));
app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

//set port
const port=process.env.PORT || '3000';
app.set('port',port);

const server=http.createServer(app);

server.listen(port,()=>console.log(`Running on localhost:${port}`));
