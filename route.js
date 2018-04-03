'use strict';

var express = require("express");
var router = express();

//GET questions
router.get("/", function(req, res){
    var o = obj.props;
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
    questionID: req.params.qID,
    body: req.body
});
});


//POST questions/:qID/answers/:aID
//route for editting a specific answers
router.put("/:qID/answers/:aID", function(req, res){
    res.json({response: "There is a PUT request to /answers/aID",
    questionID: req.params.qID,
    answerID: req.params.aID,
    body: req.body
});
});


//POST questions/:qID/answers/:aID
//route to delete a specific answers
router.delete("/:qID/answers/:aID", function(req, res){
    res.json({response: "There is a DELETE request to /answers/aID",
    questionID: req.params.qID,
    answerID: req.params.aID
});
});

//POST questions/:qID/answers/:aID/vote-up
//POST questions/:qID/answers/:aID/vote-down
//route to VOTE for a specific answers
router.post ("/:qID/answers/:aID/vote-:dir",function(req, res){
    if(req.params.dir.search(/^(up|down)$/) === -1){
        var err = new Error("Not found");
        err.status = 404;
        next(err);
    } else{
        next();
    }
}, function(req, res){
    res.json({response: "There is a VOTE request to /answers/aID " + req.params.dir,
    questionID: req.params.qID,
    answerID: req.params.aID,
    vote: req.params.dir
});
});

module.exports = router;