const mongoose = require('mongoose');

// create our db and connect

mongoose.connect('mongodb://localhost/blog');

mongoose.connection.on('connected', () => {
	console.log('mongoose is connected');
});

mongoose.connection.on('error', () => {
	console.log(err, 'mongoose error');
});

mongoose.connection.on('disconnected', () => {
	console.log('mongoose is disconnected');
});