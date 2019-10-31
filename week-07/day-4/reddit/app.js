'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const env = require('dotenv').config();

app.use(express.json());

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DBNAME
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

app.get('/hello', function(req, res) {
    let hi = 'hello'
    res.send(hi);
});

app.listen(PORT);