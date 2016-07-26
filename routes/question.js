/**
 * Created by aditya.dalal on 26/07/16.
 */

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('question', { title: 'Submit Question' });
});

router.post('/', function(req, res, next) {
    var que = req.body.question;
    var ans = req.body.answer;
    if(que === "" || ans === ""){
        res.render('question', {title: 'Submit Question', error_message: "Question/Answer field cannot be empty"})
    }
    else {
        mongoose.model('question').create({
            question: que,
            answer: ans
        }, function (err, response) {
            if (err) {
                res.render('question', {title: 'Submit Question', error_message: "Failed to save question"});
            }
            else {
                res.render('question', {title: 'Submit Question', success_message: "Successfully saved question. Add new question below"});
            }
        });
    }
});

module.exports = router;
