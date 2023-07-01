'use strict'
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body> <form action="/message" method = "POST"><input type="text" name="message"><button type = "submit" >Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        res.on('request', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })

        res.on('finish', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody); 
            console.log('End');
        })

        fs.writeFileSync('message.txt', 'From Nodejs server');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3000);
