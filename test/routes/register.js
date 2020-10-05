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

describe('Test Register', () => {
    describe('POST /register success', () => {
        it('Should be object and have status 201', (done) => {
            chai.request(server)
                .post("/register")
                .send({ email: 'reg@reg.com', password: 'regtest123' })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('POST /register missing password', () => {
        it('Should be object and have status 401', (done) => {
            chai.request(server)
                .post("/register")
                .send({ email: 'reg@reg.com'})
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('POST /register user exists', () => {
        it('Should be object and have status 500', (done) => {
            chai.request(server)
                .post("/register")
                .send({ email: 'reg@reg.com', password: 'regtest123' })
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
});
