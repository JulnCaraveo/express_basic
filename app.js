const express=require('express')
const app=express()
const port =3000//puerto por default

// localhost:3000
app.get('/',(req, res) =>{
    res.send("Hola a todos")
}) 
//url diferente localhost:3000/launchx
app.get('/launchx',(req, res) =>{
    res.send("Hola a launchX")
}) 
//mandando objetos 
app.get('/node',(req, res) =>{
    const explorer={name:"Julian",apellido:"caraveo"}
    res.send([explorer.name,explorer.apellido])

}) 
//Mandar informacion por la url params
app.get('/explorer/:explorer',(req, res) =>{
    console.log(req.params)
    res.send(req.params)

}) 

app.listen(port,()=>{
    console.log("server listo")

})