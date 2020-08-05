const apiRouter = require('express').Router();
const articlesRouter = require("../routes/articles.router")
const topicsRouter =  require("../routes/topics.router")

apiRouter.use('/articles', articlesRouter)
apiRouter.use('/topics', topicsRouter)

module.exports = apiRouter;