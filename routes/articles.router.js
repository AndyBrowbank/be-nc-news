const articlesRouter = require('express').Router();
const {sendAllArticles}  = require('../controllers/articles.controllers')

 

articlesRouter.get("/", sendAllArticles) 

module.exports = articlesRouter;