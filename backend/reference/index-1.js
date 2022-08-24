const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello, my first NodeJS with React MS');
});

var server = app.listen(PORT, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('I have ears listening at http://%s:%s', host, port);
});