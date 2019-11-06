'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const env = require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DBNAME,
    multipleStatements: true
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

app.get('/hello', function(req, res) {
    let hi = 'hello world';
    res.send(hi);
});

app.get('/posts', function(req, res) {
    req.accepts('application/json');
    res.status(200);
    res.header('Content-Type', 'application/json');
    let sql = `SELECT * FROM posts;`;
    conn.query(sql, function(err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.post('/posts', function(req, res) {
    req.accepts('application/json');
    res.status(200);
    res.header('Content-Type', 'application/json');
    let sqlselect = `SELECT * FROM posts WHERE id = (SELECT MAX(id) FROM posts)`;
    let sqlinsert = `INSERT INTO posts (title, url, timestamp) VALUES ("${req.body.title}", "${req.body.url}", now())`;
    conn.query(`${sqlinsert}; ${sqlselect}`, function(err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.put('/posts/:id/upvote', function(req, res) {
    req.accepts('application/json');
    res.status(200);
    res.header('Content-Type', 'application/json');
    let sqlselect = `SELECT * FROM posts WHERE id = "${req.params.id}"`;
    let sqlinsert = `UPDATE posts SET score = score + 1 WHERE id = ${req.params.id}`;
    conn.query(`${sqlinsert}; ${sqlselect}`, function(err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.put('/posts/:id/downvote', function(req, res) {
    req.accepts('application/json');
    res.status(200);
    res.header('Content-Type', 'application/json');
    let sqlselect = `SELECT * FROM posts WHERE id = "${req.params.id}"`;
    let sqlinsert = `UPDATE posts SET score = score - 1 WHERE id = ${req.params.id}`;
    conn.query(`${sqlinsert}; ${sqlselect}`, function(err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.listen(PORT);