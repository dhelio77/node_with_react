const express = require('express');
const path = require('path');
const router = express.Router();
const middleware = require("../backend/middleware");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/about', middleware.requireAuthentiation, function (req, res) {
    res.sendFile(path.join(__dirname + '/project-details.html'));
});

router.get('/options', middleware.requireAuthentiation, function (req, res) {
    res.sendFile(path.join(__dirname + '/options.html'));
});

router.get('/exports', middleware.requireAuthentiation, function (req, res) {
    res.sendFile(path.join(__dirname + '/exports.html'));
});

module.exports = router;