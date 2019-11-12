'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('yondu endpoint with params', (t) => {
    request(app)
        .get('/yondu')
        .query({
            distance: 100.0,
            time: 10.0
        })
        .expect(200)
        .end(function(err, res) {
            t.deepEqual(res.body, {
                "distance": 100.0,
                "time": 10.0,
                "speed": 10.0
            }, 'query and status ok');
            t.end();
        });
});

test('yondu endpoint without params', (t) => {
    request(app)
        .get('/yondu')
        .query()
        .expect(406)
        .end(function(err, res) {
            t.deepEqual(res.body, {
                "error": "Wrong parameters!"
            }, 'wrong query and status');
            t.end();
        });
});