const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url
    if (url === '/home'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></message>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>')
        res.end();
    }
    else if (url === '/about'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></message>');
        res.write('<body><h1>Welcome to About us page</h1></body>');
        res.write('</html>')
        res.end();

    }
    else if (url === '/node'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></message>');
        res.write('<body><h1>Welcome to node.js project</h1></body>');
        res.write('</html>')
        res.end();

    }
});
