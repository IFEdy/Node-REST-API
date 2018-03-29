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

//POST questions/id/answers
//route for creating answwers
router.post("/:id/answers", function(req, res){
    res.json({response: "There is a POST request to /answers",
    questiodID: req.params.id,
    body: req.body
});
});


//POST questions/id/answers/:id
//route for editting a specific answwers


module.exports = router;