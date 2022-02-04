const express = require('express')

const app = express()

app.get('/',(request,response) => {
    response.send('Hello express')
})

app.listen(8000,() => {
    console.log('started')
})