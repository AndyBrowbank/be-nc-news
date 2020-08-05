const apiRouter = require('express').Router();
const articlesRouter = require("../routes/articles.router")
const topicsRouter =  require("../routes/topics.router");
const usersRouter = require('../routes/users.router');

apiRouter.use('/articles', articlesRouter)
apiRouter.use('/topics', topicsRouter)
apiRouter.use('/users', usersRouter)

module.exports = apiRouter;