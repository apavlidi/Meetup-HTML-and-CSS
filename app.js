const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (request, response)=>{
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port);

