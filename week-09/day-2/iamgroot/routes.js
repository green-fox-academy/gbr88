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
        res.status(200);
    } else {
        res.json({
            "error": "I am Groot!"
        });
        res.status(406);
    }
});

module.exports = app;