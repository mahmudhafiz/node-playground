const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end("Home page");
//     }
//     if(req.url === '/about') {
//         // Blocking code
//         res.end("About page");
//     }
//     res.end("Not found anything!");
// });

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Welcome');
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000... ');
})