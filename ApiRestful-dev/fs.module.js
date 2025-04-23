const fs = require ('fs')

const texto = 'davi brito'
fs.writeFile('./ApiRestful-dev/teste.txt', texto, (err) => {
    if (err){
    console.log(err)
    }
})

fs.appendFile('./ApiRestful-dev/teste.txt', texto, (err) => {
    if (err){
    console.log(err)
    }
})