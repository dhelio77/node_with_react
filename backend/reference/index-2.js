const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000
const router = express.Router();

app.use(router);
app.use(bodyParser.json());

var printBody = (req, res) => {
    console.log(req.body);
    res.send('DONE');
}

router.route('/').post(printBody);


var server = app.listen(PORT, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('I have ears listening at http://%s:%s', host, port);
});