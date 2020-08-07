process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const connection = require("../db/connection");
const topicsRouter = require("../routes/topics.router");

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
          .then(res=>{
              const articles=res.body.articles; 
              expect(Array.isArray(articles)).toBe(true)
              expect(typeof articles[0].author).toBe("string")
              expect(res.body.articles).toEqual(expect.arrayContaining([expect.objectContaining(
                  {
                      "author": expect.any(String)
                  }
              )]))
          })
      });  
    });
    describe('/topics', () => {
        test('repsonds with an array of topics objects', () => {
            return request(app)
            .get("/api/topics")
            .expect(200)
            .then(res=>{
                const topics = res.body.topics
                expect(Array.isArray(topics)).toBe(true)
                expect(typeof topics[0].slug).toBe("string")
                expect(typeof topics[0].description).toBe("string")
            })
        });
    });
    describe('GET /users/:username', () => {
        test('responds with object with key of users, requested properties and a 200', () => {
            return request(app)
            .get("/api/users/icellusedkars")
            .expect(200)
            .then(res=> {  
             expect(res.body.user).toEqual
             ({
                username: 'icellusedkars',
                name: 'sam',
                avatar_url: 'https://avatars2.githubusercontent.com/u/24604688?s=460&v=4',
             })
            });
        
        });
        test('responds with 404 error if username not found', () => {
            return request(app)
            .get("/api/users/pibblypopbillybob")
            .expect(404)
            .then(({body})=>{ 
                expect(body.msg).toBe("404 bad request")
            })
        }); 
    });
    describe('GET /api/articles/:article_id', () => {
        test('returns 200 and article object with required properties', () => {
            return request(app)
            .get('/api/articles/1')
            .expect(200)
            .then(({body:{article}})=>{
                expect(article).toHaveProperty('author')
                expect(article).toHaveProperty('title')
                expect(article).toHaveProperty('article_id')
                expect(article).toHaveProperty('body')
                expect(article).toHaveProperty('topic')
                expect(article).toHaveProperty('created_at')
                expect(article).toHaveProperty('votes')
                expect(article).toHaveProperty('comment_count')
            })
        })
        test('GET: returns 404  when article_id not found', () => {
            return request(app)
            .get('/api/articles/999999')
            .expect(404)
            .then(({body: {msg}}) => {
              expect(msg).toEqual('404 bad request');
            })
    })
})

});   
