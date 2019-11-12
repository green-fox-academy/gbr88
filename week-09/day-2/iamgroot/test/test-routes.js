'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint with params', (t) => {
    request(app)
        .get('/groot')
        .query({ message: 'somemessage' })
        .expect(200)
        .end(function(err, res) {
            t.deepEqual(res.body, {
                "received": 'somemessage',
                "translated": "I am Groot!"
            }, 'query and status ok');
            t.end();
        });
});

test('groot endpoint without params', (t) => {
    request(app)
        .get('/groot')
        .query()
        .expect(406)
        .end(function(err, res) {
            t.deepEqual(res.body, {
                "error": "I am Groot!"
            }, 'query missing and error status');
            t.end();
        });
});