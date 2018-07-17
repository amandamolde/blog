const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');
const Authors = require('../models/authors')

router.get('/', (req, res) => {
	Articles.find({}, (err, foundArticles) => {
		res.render('articles/index.ejs', {
			articles: foundArticles
		});
	});
});

router.get('/new', (req, res) => {
	Author.find({}, (err, allAuthors) => {
		res.render('articles/new.ejs', {
			authors: allAuthors
		});
	});
});

router.post('/', (req, res) => {
	console.log(req.body);
	Articles. create(req.body, (err, createdArticle) => {
		console.log(createdArticle, ' this is the createdArticle');
		res.redirect('/articles');
	});
});

router.get('/:id', (req, res) => {
	Articles.findById(req.params.id, (err, foundArticle) => {
		res.render('articles/show.ejs', {
			article: foundArticle
		});
	});
});

router.get('/:id/edit', (req, res) => {
	Articles.findById(req.params.id, (err, foundArticle) => {
		res.render('articles/edit.ejs', {
			article: foundArticle
		});
	});
});

router.put('/:id', (req, res) => {
	Articles.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundArticle) => {
		res.redirect('/articles');
	});
});

router.delete('/:id', (req, res) => {
	Articles.findByIdAndRemove(req.params.id, (err, deletedArticle) => {
		console.log(deletedArticle, ' this is deletedArticle');
		res.redirect('/articles');
	});
});

module.exports = router;