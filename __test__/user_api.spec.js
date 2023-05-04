const request = require("supertest");

const app = require("../api");

// group test
describe("api server", () => {
    let api;
  
    // beforeAll is jest hook you only need to do setup once.Runs a function before any of the tests in this file run.
    beforeAll(() => {
      api = app.listen(5000, () => {
        console.log("Test server listening on port 5000");
      });
    });
      //Runs a function after each one of the tests in this file completes.
  afterAll((done) => {
    console.log("Gracefully stopping the server");
    api.close(done);
  });

  test("it response to GET / with status 200", (done) => {
    request(api).get("/").expect(200, done);
  });

  test("responds to invalid method request with 405", (done) => {
    request(api).post("/").expect(405, done);
  });
  test("responds to post /register with status 201", (done) => {
    const testData = {
      name: 'Peter',
      password :1234,
      Admin : false
    };
    request(api)
      .post("/register")
      .send(testData)
      .set("Accept", "application/json")
      .expect(201)
      .expect({ testData }, done);
  });


});