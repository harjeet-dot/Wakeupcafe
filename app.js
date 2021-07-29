const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public')) 
app.use(express.static(__dirname + '/images')) //images
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//Fetching data from gist github for places

app.get('/places.ejs', function (req, res) {
	let url = `https://gist.githubusercontent.com/harjeet-dot/bf72312f870edcf72c51ebe9c80efb66/raw/a352ca0c1acb044540dedfc02e00dc7d3051dd9a/places.json`
	request(url, function (err, response, body) {
		if(err){
			res.render('places', {quote: null, error: 'Error, please try again'});
		} 
		else {		
			let data = JSON.parse(body);
			console.log(data);
			if(data == undefined){
				res.render('places', {quote: null, error: 'Error, please try again'});
			}
			else {
				res.render("places.ejs", {data: data})
			}
		}
	});
})

//Fetching data from gist github for coffee

app.get('/coffeee.ejs', function (req, res) {
	let url = `https://gist.githubusercontent.com/harjeet-dot/aea4c7ccc13c94329198dae0513f59de/raw/e5bb38e2bd0b6aeb5c0f0c40f52ebf5b35656cb5/coffee.json`
	request(url, function (err, response, body) {
		if(err){
			res.render('food', {quote: null, error: 'Error, please try again'});
		} 
		else {		
			let data = JSON.parse(body);
			console.log(data);
			if(data == undefined){
				res.render('food', {quote: null, error: 'Error, please try again'});
			}
			else {
				res.render("coffeee.ejs", {data: data})
			}
		}
	});
})
//direct to login page 

app.get('/', (req, res) =>{
    res.render("login.html")
})
//home page
app.get('/home.html', (req, res) =>{
    res.render("home.html")
})

//contact-us page
app.get('/contact-us.html', (req, res) =>{
    res.render("contact-us.html")
});

app.listen(3000, function () {
	console.log('This project is listening on port 3000!')
})