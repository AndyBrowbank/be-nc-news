const connection = require("../db/connection"); //knex

exports.getArticle = (article_id)=> {


    return connection("articles")
    .select("articles.*")
    .from("articles")
    .where('articles.article_id', "=", article_id)
    .count({comment_count: 'comment_id'})
    .leftJoin("comments", "comments.article_id", "=", "articles.article_id")
    .groupBy("articles.article_id")
    .then(articles=>{ console.log("in articles model")
        if (articles.length===0)  { 
            return Promise.reject({status: 404, msg: "404 bad request"})
        }
        else{
            return articles[0]
        }
    })

    
}

exports.getAllArticles = ()=> {
    return connection.select('*').from('articles')
}