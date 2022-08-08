const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, my first NodeJS with React MS');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('I have ears listening at http://%s:%s', host, port);
});