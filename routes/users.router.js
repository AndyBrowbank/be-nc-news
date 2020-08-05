const usersRouter = require('express').Router();
const {sendAllUsers}  = require('../controllers/users.controllers')

 

usersRouter.get("/:username", sendAllUsers) 

module.exports = usersRouter;