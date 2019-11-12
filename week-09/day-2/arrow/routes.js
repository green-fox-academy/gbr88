'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
    let distance = req.query.distance;
    let time = req.query.time;
    let speed = distance / time;
    if (distance && time > 0) {
        res.json({
            "distance": parseFloat(parseFloat(distance).toFixed(1)),
            "time": parseFloat(parseFloat(time).toFixed(1)),
            "speed": parseFloat(parseFloat(speed).toFixed(1))
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