const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Home page");
    }
    if(req.url === '/about') {
        // Blocking code
        res.end("About page");
    }
    res.end("Not found anything!");
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000... ');
})