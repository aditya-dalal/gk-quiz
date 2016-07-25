/**
 * Created by aditya.dalal on 24/07/16.
 */

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.connect('mongodb://localhost/gkquiz');
autoIncrement.initialize(connection);