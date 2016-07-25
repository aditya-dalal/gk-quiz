/**
 * Created by aditya.dalal on 24/07/16.
 */

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var questionSchema = new mongoose.Schema({
    number: Number,
    question: String,
    answer: String
});

mongoose.model('question', questionSchema);
questionSchema.plugin(autoIncrement.plugin, {model: 'question', field: 'number'});