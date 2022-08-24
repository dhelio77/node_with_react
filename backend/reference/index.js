const express = require("express");
const debug = require("debug")("nodejs-react");
const app = express();
const PORT = process.env.PORT || 3000
var router = express.Router();

app.use(router);

var prepareIndex = (req, res, next) => {
    req.index = 'Hello, my first NodeJS with React MS';
    next();
}
var sendIndex = (req, res) => {
    res.send("req.index");
    res.send("../web/index.html");
}
router.route('/').get(prepareIndex, sendIndex);

var server = app.listen(PORT, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('I have ears listening at http://%s:%s', host, port);
});