const express = require('express')

const app = express()

app.get('/home',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.sendFile(__dirname +'/index.html')

})

app.get('/data',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('用户数据')
})
app.listen('9000',() => {
    console.log('start')
})