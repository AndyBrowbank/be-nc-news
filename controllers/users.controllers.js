const {getAllUsers} = require('../models/users.models')

exports.sendAllUsers = (req,res, next) => {
    const {username} = req.params; // destructure username from req.params
    getAllUsers(username)
    .then(user=>{console.log(user)
        res.status(200).send({user})
    })
    .catch(next) // catch error
};