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

app.get('/', function(req, res) {
    conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
        console.log(rows);
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.listen(PORT);