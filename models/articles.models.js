const connection = require("../db/connection"); //knex
const articlesRouter = require("../routes/articles.router");

exports.getArticle = (article_id)=> {


    return connection("articles")
    .select("articles.*")
    .from("articles")
    .where('articles.article_id', "=", article_id)
    .count({comment_count: 'comment_id'})
    .leftJoin("comments", "comments.article_id", "=", "articles.article_id")
    .groupBy("articles.article_id")
    .then(articles=>{  
        if (articles.length===0)  { 
            return Promise.reject({status: 404, msg: "404 bad request"})
        }
        else{
            return articles[0]
        }
    })
}

exports.getPatchedArticle = (inc_votes, article_id)=>{
    return connection("articles")
    .select("articles.*")
    .from("articles")
    .where("article_id", "=", article_id)
    .increment("votes", inc_votes)
    .then(articles=>{
        if(articles.length === 0) {
            return Promise.reject({status: 404, msg: "404 bad request"})
        }
        else{
            return articles
        }
    })

}

exports.getAllArticles = ()=> {
    return connection.select('*').from('articles')
}