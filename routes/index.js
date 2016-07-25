var express = require('express');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/question', function(req, res, next) {
    res.render('question');
});

router.post('/question', function(req, res, next) {
    var que = req.body.question;
    var ans = req.body.answer;
    if(que === "" || ans === ""){
        res.render('question', {error_message: "Question/Answer field cannot be empty"})
    }
    else {
        mongoose.model('question').create({
            question: que,
            answer: ans
        }, function (err, response) {
            if (err) {
                res.render('question', {error_message: "Failed to save question"});
            }
            else {
                res.render('question', {success_message: "Successfully saved question. Add new question below"});
            }
        });
    }
});

module.exports = router;
