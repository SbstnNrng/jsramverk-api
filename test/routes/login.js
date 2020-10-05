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

describe('Test Login', () => {
    describe('Register user for login', () => {
        it('Should have status 201', (done) => {
            chai.request(server)
                .post("/register")
                .send({ email: 'log@log.com', password: 'logtest123' })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
    });
    describe('POST /login success', () => {
        it('Should be object and have status 201', (done) => {
            chai.request(server)
                .post("/login")
                .send({ email: 'log@log.com', password: 'logtest123' })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
    describe('POST /login fail user does not exist', () => {
        it('Should be object and have status 401', (done) => {
            chai.request(server)
                .post("/login")
                .send({ email: 'logfail@log.com', password: 'logfailtest123' })
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
    describe('POST /login fail missing pass', () => {
        it('Should be object and have status 401', (done) => {
            chai.request(server)
                .post("/login")
                .send({ email: 'logfail@log.com'})
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
    describe('POST /login fail wrong password', () => {
        it('Should be object and have status 401', (done) => {
            chai.request(server)
                .post("/login")
                .send({ email: 'log@log.com', password: 'wrong' })
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
});
