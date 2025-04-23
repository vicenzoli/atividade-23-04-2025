const fs = require ('fs')

console.log('antes')
try{
    const data = fs.readFileSync('./ApiRestful-dev/teste.txt','utf-8')
    console.log(data)
} catch (e) {
    console.log(e)
}

console.log('depois')