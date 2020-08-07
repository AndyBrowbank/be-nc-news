const express = require('express');
const apiRouter = require('./routes/api.router');
const app = express();


app.use(express.json()); // body parser otherwise body will be undefined
app.use("/api", apiRouter);
app.use((err, req, res, next)=>{
    console.log(err);
    if(err.status) res.status(err.status).send({ msg: err.msg })
    else next(err)

})

module.exports = app;