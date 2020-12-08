//node server
var http = require('http')
http.createServer((req,res)=>{
    res.write("welcome varma")
    res.end();
}).listen(3000,()=>console.log("node server working fine"))


//express server
var express=require('express')
var app = express();
app.get('/',(req,res)=>{
    res.send("hello varma ")
})
app.get('/next',(req,res)=>{
    res.send("hello varma welcome to backend")
})
app.listen(4000,()=>console.log("express server working fine"))