const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
	abstract: String,
    publish_time: String,
    authors: String,
    Year: String   
});

const Article = mongoose.model('Articles', articleSchema ,'Articles');

module.exports = Article;