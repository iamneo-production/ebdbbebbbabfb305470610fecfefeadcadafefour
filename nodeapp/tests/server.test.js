const request = require("supertest");
const app = require("../server");

describe("API Endpoints Existence", () => {

  it("POST /api/customers should exist", (done) => {
    const requestBody = {
      "name": "Alex",
      "email":"alex@gmail.com",
      "phone":"7376540210",
      "address":"Amarillo",
      "accountNumber":"53478785417"
    };
    request(app)
      .post("/api/customers")
      .send(requestBody) 
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  

  it("GET /api/customers should exist", (done) => {
    request(app) 
      .get("/api/customers")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });



  it("PUT /api/customers/:id should not exist", (done) => {
    const requestBody = {
        "name":"dempo2"
    };
    const validCustomerId = "C";

    request(app)
      .put(`/api/customers/${validCustomerId}`)
      .send(requestBody)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("DELETE /api/customers/:id should not exist", (done) => {
    const validCustomerId = "C";

    request(app)
      .delete(`/api/customers/${validCustomerId}`)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);

        done();
      });
  });


  it("POST /api/customer should exist", (done) => {
    const requestBody = {
      "name": "John Doe",
      "email": "john.doe@example.com",
    };

    request(app)
      .post("/api/customer")
      .send(requestBody) 
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });


  it("GET /api/customer should exist", (done) => {
    request(app) 
      .get("/api/customer")
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });


  it("PUT /api/customers/:id should exist", (done) => {
    const requestBody = {
        "name":"Emily",
        "email":"james@gmail.com",
        "phone":"9876543210",
        "address":"Amarillo",
        "accountNumber":"58574685477"
    };
    const validCustomerId = "31046226-2b40-4d55-8468-3ecd35cd2d40";
    request(app)
      .put(`/api/customers/${validCustomerId}`)
      .send(requestBody)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });


  it("DELETE /api/customers/:id should exist", (done) => {
      const validCustomerId = "25607fa9-7a30-4136-a922-75ef1508f479";
  
      request(app)
        .delete(`/api/customers/${validCustomerId}`)
        .expect(204)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

  it("GET /api/customers/:id should exist and return 200", (done) => {
    const validCustomerId = "31046226-2b40-4d55-8468-3ecd35cd2d40";
    request(app)
      .get(`/api/customers/${validCustomerId}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("GET /api/customers/:id should exist and return 200", (done) => {
    const validCustomerId = "31046226";
    request(app)
      .get(`/api/customers/${validCustomerId}`)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  
});

module.exports = app;
