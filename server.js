const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);

const articlesController = require('./controllers/articles.js');
app.use('/articles', articlesController);

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.listen(3000, () => {
	console.log('App is listening on port 3000');
});