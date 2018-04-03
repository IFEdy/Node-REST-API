'use strict';

var express = require("express");
var app = express();
var routes = require("./route.js");
var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

//ERROR handler
app.use(function(req, res, next){
    var err = new Error("NOT FOUND");
    err.status = 404;
    next(err);
});

//Second ERROR handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error : {
            message: err.message
        }
    });
});

app.use("/questions", routes);
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("This app is listening @ 3000");
});