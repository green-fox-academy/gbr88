'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    let input = req.query.message;
    if (input) {
        res.json({
            "received": input,
            "translated": "I am Groot!"
        });
    } else {
        res.json({
            "error": "I am Groot!"
        })
    };
});

module.exports = app;