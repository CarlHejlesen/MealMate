import express from 'express'
import https from 'https'
import path from 'path'
import fs from 'fs'

const app = express()

app.use('/',(req,res,next)=>{
    res.send('Hello from SSL server')
})

const sslServer = https.createServer({
    key:'',
    cert:''
},app)

sslServer.listen(3443,(console.log('Secure server on port 3443')))