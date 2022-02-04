const express = require('express')

const app = express()

app.get('/server',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('Hello ajax')
})

app.all('/server',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('Hello ajax POST')
})
app.all('/json-server',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:'lvjiahao'}
    let str = JSON.stringify(data)
    response.send(str)
})

app.get('/ie',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('Hello IE 2')
})
app.get('/delay',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('延迟')
    },3000)
})
app.all('/jquery',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    let data = {name:'lvjiahao'}
    response.send(JSON.stringify(data))
})
app.all('/axios',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    let data = {name:'lvjiahao'}
    response.send(JSON.stringify(data))
})


app.all('/jsonp',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    let data = {name:'lvjiahao'}
    let str = JSON.stringify(data)
    response.end(`handle(${str})`)
})

app.all('/check-username',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    let data = {name:'lvjiahao'}
    let str = JSON.stringify(data)
    response.end(`handle(${str})`)
})

app.all('/jquery-jsonp',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    let data = {name:'lvjiahao ',age:20}
    let cb = request.query.callback
    let str = JSON.stringify(data)
    response.end(`${cb}(${str})`)
})

app.all('/cors',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.setHeader('Access-Control-Allow-Method','*')
    response.send('HELLO CORS')
})


app.listen(8000,() => {
    console.log('started')
})