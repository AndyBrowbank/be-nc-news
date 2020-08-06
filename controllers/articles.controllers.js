const {getArticle} = require('../models/articles.models')
const {getAllArticles} = require('../models/articles.models')

exports.sendArticle = (req, res, next) => {
    const {article_id} = req.params; // destructure articles 
    getArticle(article_id)
    .then(article=>{console.log(article)
        res.status(200).send({article})
    })
    .catch(next)
};

exports.sendAllArticles = (req, res) => {
    getAllArticles()
    .then((articles)=>{
        res.status(200).send({articles})
    });
}