const {getAllArticles} = require('../models/articles.models')

exports.sendAllArticles = (req, res) => {
    getAllArticles().then((articles)=>{
        res.status(200).send({articles})
    }); // accessing the promisse from topics.models.js
};