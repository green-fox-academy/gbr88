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
    let input = req.query;
    let inputValues = req.query.input;
    if (Object.entries(input).length === 0) {
        doubling.error = "Please provide an input!"
    } else {
        doubling.received = inputValues;
        doubling.result = inputValues * 2;
    }
    res.send(doubling);
});

app.get('/greeter', (req, res) => {
    let greeter = {};
    let input = req.query;
    if (Object.entries(input).length === 0) {
        greeter.error = "Please provide a name and a title!"
    } else if (input.hasOwnProperty("name") && !input.hasOwnProperty("title")) {
        greeter.error = "Please provide a title!"
    } else if (!input.hasOwnProperty("name") && input.hasOwnProperty("title")) {
        greeter.error = "Please provide a name!"
    } else {
        greeter.welcome_message = 'Oh, hi there ' + req.query.name + ', my dear ' + req.query.title + '!';
    }
    res.send(greeter);
});

app.get(['/appenda/', '/appenda/:any'], (req, res) => {
    let appenda = {};
    let input = req.params;
    if (input.any == undefined) {
        appenda.readyState = 4;
        appenda.responseText = "Not Found";
        appenda.status = 404;
        appenda.statusText = "Not Found";
    } else {
        appenda.appended = input.any + 'a';
    }
    res.send(appenda);
});

// app.get('/appenda/', (req, res) => {
//     res.status(404).send('Not Found');
// });

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});