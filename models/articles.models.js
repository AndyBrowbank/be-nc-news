const connection = require("../db/connection"); //knex

exports.getAllArticles = ()=> {
    return connection.select('*').from('articles')
    

    
}

