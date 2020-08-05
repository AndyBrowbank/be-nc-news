const connection = require("../db/connection"); //knex

exports.getAllTopics = ()=> {
    return connection.select('*').from('topics')
    

    
}

