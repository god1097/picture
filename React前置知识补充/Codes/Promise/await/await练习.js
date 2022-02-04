const fs = require('fs')
const util = require('util')
const mineReadFile = util.promisify(fs.readFile)

//原生
// fs.readFile('./component/1.txt',(err,data1) => {
//     if(err) throw err
//     fs.readFile('./component/2.txt',(err,data2) => {
//         if(err) throw err
//         fs.readFile('./component/3.txt',(err,data3) => {
//             if(err) throw err
//             console.log(data1 + data2 + data3)
//         })
//     })
// })


//await
async function main(){
    let data1 = await mineReadFile('./component/1.txt')
    let data2 = await mineReadFile('./component/2.txt')
    let data3 = await mineReadFile('./component/3.txt')
    console.log(data1 + data2 + data3)
}

main()