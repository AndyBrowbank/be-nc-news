const {getAllUsers} = require('../models/users.models')

exports.sendAllUsers = (req,res, next) => {
    getAllUsers()
    .then(users=>{
        res.status(200).send({users})
    }); // accessing the promise from users.models.js
};