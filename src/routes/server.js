const express=require('express')
const app=express()
const morgan=require('morgan')
const cors=require('cors')
const bodyparser = require('body-parser')
const path = require('path')
require('./database')

app.set('Port',8000)


app.use(morgan('dev'))

//app.use(bodyparser.urlencoded({extended:true}))
//app.use(bodyparser.json)
//Rutas
app.use('/api/',require('./prueba.route'))

//star server
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(app.get('Port'),()=>{
    console.log('escuchando por el puerto',app.get('Port'))
})
