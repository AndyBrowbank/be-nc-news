const connection = require("../db/connection"); //knex
 

exports.getAllUsers = (username)=> {
    
      
    return connection("users")
    .where('username', username)
    .then(users=>{
        if (users.length===0) {
        return Promise.reject({status: 404, msg: "404 bad request"})
        }
        else{
            return users[0]
        }
    })
   
}