/**
 * Created by aditya.dalal on 26/07/16.
 */

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var que = mongoose.model('question');

router.get('/', function(req, res) {
    que.findOne({number: 20}, function(err, doc){
        res.render('quiz', {title: "Quiz", doc: doc});
    });
});

module.exports = router;