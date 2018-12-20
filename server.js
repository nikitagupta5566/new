const express = require('express');
const hbs = require('hbs');    // handlebars 

var app = express();

app.set('view engine','hbs'); // set function is used to configure express

// __dirname is the variable that gets passed into our file by that wrapper function
app.use(express.static(__dirname + '/public'));

app.get('/about',(req, res) => {         // HTTP route handlers
	// res.send('<h1>Hello express<h1>');
	res.render('about.hbs',{
		pageTitle: 'About page',
		currentYear: new Date().getFullYear(),
	});
});

// app.get('/', (req,res) => {
// 	res.send({
// 		name:'Nikita',
// 		age:19
// 	})
// })

app.get('/',(req,res) => {
	res.render('home.hbs',{
		pageTitle: 'Home page',
		welcomeMessage: 'Welcome',
	})
})

// second argument will let us do something once the server is up because it can take a little bit of time to get
// this function is executed once the server is up

app.listen(3000,() => {
	console.log('server is up on port 3000');
});
