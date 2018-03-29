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

router.get("/:qID", function(req, res){
    res.json({
        response: "There is a GET request with a specific ID " + req.params.qID
    });
});

//POST questions/:qID/answers
//route for creating answwers
router.post("/:qID/answers", function(req, res){
    res.json({response: "There is a POST request to /answers",
    questiodID: req.params.qID,
    body: req.body
});
});


//POST questions/:qID/answers/:id
//route for editting a specific answers
router.put("/:qID/answers/:aID", function(req, res){
    res.json({response: "There is a POST request to /answers/aID",
    questiodID: req.params.qID,
    answerID: req.params.aID,
    body: req.body
});
});


//POST questions/:qID/answers/:id
//route to delete a specific answers
router.delete("/:qID/answers/:aID", function(req, res){
    res.json({response: "There is a POST request to /answers/aID",
    questiodID: req.params.qID,
    answerID: req.params.aID,
    body: req.body
});
});

module.exports = router;