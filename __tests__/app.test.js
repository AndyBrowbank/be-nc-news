process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const connection = require("../db/connection")

describe.only('/api', () => {
    beforeEach(() => {
        return connection.seed.run(); // hooks before and after open and close connections
    });
    afterAll(() => {
        return connection.destroy(); // close connection
    });
    describe('/articles', () => {
      test('responds with an array of articles objects', () => {
          return request(app)
          .get("/api/articles")
          .expect(200)
      });  
    });
    describe('/topics', () => {
        test('repsonds with an array of topics objects', () => {
            return request(app)
            .get("/api/topics")
            .expect(200)
        });
    });
    describe('/users', () => {
        test('responds with the requested user and a 200', () => {
            return request(app)
            .get("/api/users/icellusedkars")
            .expect(200)
            .then(res=> {  
             expect(res.body).toEqual({
                        user :{
                        username: "icellusedkars",
                        avatar_url: "https://avatars2.githubusercontent.com/u/24604688?s=460&v=4",
                        name: "sam"
                    }
                }
                )
            })
        }); 
    });
    });