const articlesRouter = require('express').Router();
const {sendArticle}  = require('../controllers/articles.controllers')
const {sendAllArticles} = require('../controllers/articles.controllers')
const {patchArticle} = require("../controllers/articles.controllers")

 
articlesRouter.get("/", sendAllArticles)
articlesRouter.get("/:article_id", sendArticle) 
articlesRouter.patch("/:article_id", patchArticle)

module.exports = articlesRouter;