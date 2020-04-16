const port = process.env.PORT || 3000;
const express = require('express');
const server = express();
const path = require('path');
server.use('/dist', express.static(path.join(__dirname, 'dist')))

server.get('/', (request, response)=>{
    response.sendFile(path.join(__dirname + '/index.html'));
})

server.listen(port);

