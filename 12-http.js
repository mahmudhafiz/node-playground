const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home page!');
    }
    if (req.url === '/about') {
        res.end('Here is our short history!');
    }
    res.end(`
        <h1>Oopsy</h1>
        <a href='/'>go back to home</a>
    `)
});

server.listen(3001);