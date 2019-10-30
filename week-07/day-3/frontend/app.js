'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let doubling = {};
    let input = req.query.input;
    if (input == undefined) {
        doubling.error = "Please provide an input!"
    } else {
        doubling.received = input;
        doubling.result = input * 2;
    }
    res.send(doubling);
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});