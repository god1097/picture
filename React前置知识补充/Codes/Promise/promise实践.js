const fs = require('fs')

// fs.readFile('./resource/content.txt',(err,data) => {
//     if(err) throw err
//     console.log(data.toString())
// })


//Promise
let p = new Promise((resolve,reject) => {
    fs.readFile('./resource/content.txt',(err,data) => {
        if(err) reject(err)
        resolve(data)
    })
})
p.then((value) => {
    console.log(value.toString())
},(reason) => {
    console.log(reason)
})