'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
    let distance = req.query.distance;
    let time = req.query.time;
    let speed = distance / time;
    if (distance || time) {
        res.json({
            "distance": parseInt(distance),
            "time": parseInt(time),
            "speed": speed
        });
        res.status(200);
    } else {
        res.json({
            "error": "Wrong parameters!"
        });
        res.status(406);
    }
});

module.exports = app;