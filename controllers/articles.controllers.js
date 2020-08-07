const {getArticle} = require('../models/articles.models')
const {getAllArticles} = require('../models/articles.models')
const {getPatchedArticle} = require("../models/articles.models")


exports.sendArticle = (req, res, next) => {
    const {article_id} = req.params; // destructure articles 
    getArticle(article_id)
    .then(article=>{ 
        res.status(200).send({article})
    })
    .catch(next)
};

exports.sendAllArticles = (req, res) => {
    getAllArticles()
    .then((articles)=>{
        res.status(200).send({articles})
    });
};

exports.patchArticle = (req, res, next) =>{ // unfinished
    
    const {article_id} = req.params;
    const {inc_votes} = req.body     // const {inc_votes} = req.body - CANNOT destructure as undefined
     getPatchedArticle(article_id, inc_votes )
    .then(articles=>{
        console.log("res in patchArticle = " + res )
        res.status(200).send({articles})
    })
     .catch(next)
 
};