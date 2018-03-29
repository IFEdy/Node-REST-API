'use strict';

var express = require("express");
var router = express();

//GET questions
router.get("/", function(req, res){
    res.json({response: "There is a GET request"});
});

//POST questions
router.post("/", function(req, res){
    res.json({response: "There is a POST request",
    body: req.body
});
});

router.get("/:id", function(req, res){
    res.json({
        response: "There is a GET request with a specific ID " + req.params.id 
    });
});

module.exports = router;