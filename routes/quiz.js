/**
 * Created by aditya.dalal on 26/07/16.
 */

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var collection = mongoose.model('question');
var asked = {};
var total;

router.get('/', function(req, res) {
    collection.count(function(err, count){
        total = count+1;
        asked = {};
        collection.findOne({number: getNextNumber()}, function(err, doc){
            res.render('quiz', {title: "Quiz", doc: doc});
        });
    });
});

router.get('/next', function(req, res) {
    var num = getNextNumber();
    if (num === "done") {
        var doc = {question: "", answer: ""};
        res.render('quiz', {title: "Quiz", doc: doc, done: "No more new questions. Go back to home page for retest."});
    }
    else {
        collection.findOne({number: num}, function (err, doc) {
            res.render('quiz', {title: "Quiz", doc: doc});
        });
    }
});

var getNextNumber = function(){
    if(Object.keys(asked).length == total-1){
        return "done";
    }
    while(true){
        var num = random(1, total);
        if(asked[num] === undefined){
            asked[num] = true;
            return num;
        }
    }
};

var random = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

module.exports = router;