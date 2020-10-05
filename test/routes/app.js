/**
* Test for routes in index, parameterized.
 */
"use strict";

process.env.NODE_ENV = 'test';

const mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Test App', () => {
    describe('GET /NOTEXISTS', () => {
        it('Should be object and have status 404', (done) => {
            chai.request(server)
                .get("/NOTEXISTS")
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
});
