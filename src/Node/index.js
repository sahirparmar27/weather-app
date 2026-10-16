const http = require('http');
const mym = require('./mym');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`Hello World <h1> How are you?</h1>` +mym.printData());
})

// Console.log(webAssembly);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});