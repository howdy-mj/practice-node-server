// 페이지 만들기

const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>Homepage</p></body></html>')
        res.end();
    } else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>Admin page</p></body></html>')
    } else if (req.url == '/data') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(JSON.stringify({ message: "Hello World"}));  
        res.end()
    } else {
        res.end('Invalid Request');
    }
})

server.listen(5000);

console.log('Node.js web server at port 5000 is running')