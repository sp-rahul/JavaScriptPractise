const fs = require('fs');

// fs.readFile('file.txt','utf8', (err, data)=> {
//     console.log(err, data)
// })
// console.log("This has ended")
// const a = fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("This has ended")

// fs.writeFile('file.txt', "This has been written ok", ()=>{
//     console.log("Written Done 1")
// })
 b = fs.writeFileSync('file.txt', "This is a way secon1d")
console.log(b)
console.log("Finish Writting")