const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Request received');
    res.end('Hi dude');
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000 ...');
});