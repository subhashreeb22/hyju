const express =require('express')
const app= express()
const p1router=require('./routes/rou.js')
const mongoose =require ('mongoose')
app.use (express.json())
app.use('/',p1router)
app.listen(3000,()=> console.log('server.started'))