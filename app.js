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

app.listen(port,()=>{
    console.log("server listo")
})