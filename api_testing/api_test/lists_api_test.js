process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let reset = require('../api_reference/reset');
let resetAPI = reset.resetAPI;
let host = 'http://localhost:3000/api';

chai.use(chaiHttp);

describe('Should Exercise API Functionality for Bards', ()  => {
  before('Should delete all boards', () => {
    resetAPI.executeReset(resetAPI.resetAll.endpoint, resetAPI.resetAll.options);
  });
  it('Should POST new Board', (done) => {
    let data = {name: 'New Board'};
    chai.request(host)
      .post('/boards')
      .send(data)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('name').eq('New Board');
        res.body.should.have.property('id');
        res.body.should.have.property('starred').eq(false);
        res.body.should.have.property('created');
        console.log(res.body);
        done();
      });

  });

  it('Should GET All Boards', (done) => {
    chai.request(host)
      .get('/boards')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eq(1);
        res.body[0].should.have.property('name').eq('New Board');
        console.log(res.body);
        done();
      });
  });

  it('Should PATCH/UPDATE Board', (done) => {
    var updateId = '';
    let data = {name: 'Edited Board', starred: true};
    chai.request(host)
      .get('/boards')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eq(1);
        res.body[0].should.have.property('name').eq('New Board');
        console.log(res.body[0]['id']);
        updateId = res.body[0]['id'];
        chai.request(host)
          .patch('/boards/' + updateId)
          .send(data)
          .end((err, res) => {
            console.log(res.body);
            res.body.should.have.property('name').eq('Edited Board');
            res.body.should.have.property('starred').eq(true);
            done();
          });
      });
  });

  it('Should Delete Board', (done) => {
    var deleteID = '';
    chai.request(host)
      .get('/boards')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eq(1);
        deleteID = res.body[0]['id'];
        chai.request(host)
          .delete('/boards/' + deleteID)
          .end((err, res) => {
            res.body.should.be.empty;
            chai.request(host)
              .get('/boards')
              .end((err, res) => {
                res.body.should.be.empty;
              });
            done();
          });
      });
  });
});