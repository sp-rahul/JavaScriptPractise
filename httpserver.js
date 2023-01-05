
const { Console } = require('node:console');
const http = require('http');


const port = precess.env.PORT || 3030;

const server = http.createServer((req, res) => {
    //console.log(res.url)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/http')
    res.end('<h1> This is Ruhul Amin</h1> <p>Dont worry man, I am here. Just cool!</p>');

})
server.listen(port, ()=> {
    console.log('Server is listening at port ${port}');
});
