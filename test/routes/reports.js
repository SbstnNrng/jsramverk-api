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

let token;

describe('Test Reports', () => {
    describe('POST /reports/ no token', () => {
        it('Should be object and have status 401', (done) => {
            chai.request(server)
                .post("/reports/")
                .send({ title: 'title', info: 'info' })
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('Register user for reports', () => {
        it('Should have status 201', (done) => {
            chai.request(server)
                .post("/register")
                .send({ email: 'rep@lrep.com', password: 'reptest123' })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
    });

    describe('Login user for reports', () => {
        it('Should be object and have status 201', (done) => {
            chai.request(server)
                .post("/login")
                .send({ email: 'rep@lrep.com', password: 'reptest123' })
                .end((err, res) => {
                    token = res.body.data.token;
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('POST /reports/ success', () => {
        it('Should be object and have status 201', (done) => {
            chai.request(server)
                .post("/reports/")
                .set('x-access-token', token)
                .send({ title: 'title', info: 'info' })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('POST /reports/ fail not valid token', () => {
        it('Should be object and have status 500', (done) => {
            chai.request(server)
                .post("/reports/")
                .set('x-access-token', 'wrongtoken')
                .send({ title: 'title', info: 'info' })
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('POST /reports/ fail no content', () => {
        it('Should be object and have status 401', (done) => {
            chai.request(server)
                .post("/reports/")
                .set('x-access-token', token)
                .send({ title: 'title'})
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('POST /reports/ testing duplicate title fail', () => {
        it('Should be object and have status 500', (done) => {
            chai.request(server)
                .post("/reports/")
                .set('x-access-token', token)
                .send({ title: 'title', info: 'info' })
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('GET /reports/edit success', () => {
        it('Should be object and have status 200', (done) => {
            chai.request(server)
                .get("/reports/edit")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('PUT /reports/edit success', () => {
        it('Should be object and have status 201', (done) => {
            chai.request(server)
                .put("/reports/edit")
                .set('x-access-token', token)
                .send({ title: 'title', info: 'infoPUT' })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('PUT /reports/edit no title', () => {
        it('Should be object and have status 401', (done) => {
            chai.request(server)
                .put("/reports/edit")
                .set('x-access-token', token)
                .send({ info: 'infoPUT' })
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('GET /reports/week/1 success', () => {
        it('Should be object and have status 200', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('GET /reports/week/2 success', () => {
        it('Should be object and have status 200', (done) => {
            chai.request(server)
                .get("/reports/week/2")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('GET /reports/week/3 success', () => {
        it('Should be object and have status 200', (done) => {
            chai.request(server)
                .get("/reports/week/3")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('GET /reports/week/4 success', () => {
        it('Should be object and have status 200', (done) => {
            chai.request(server)
                .get("/reports/week/4")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });
});
