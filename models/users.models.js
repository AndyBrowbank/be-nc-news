const connection = require("../db/connection"); //knex
const { request } = require("express");

exports.getAllUsers = ()=> {
    
      
    return connection("users")
    .select("*")
    .then(users=>{
        return users
    })
   
}