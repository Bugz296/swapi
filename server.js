/**
 * REQUIRE
 */
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

/**
 * Routes
 */
app.get('/', function(req, res){
    res.render('index');
});

// When Client Requests for People
app.get('/people', function(req, res){
    axios.get('http://swapi.dev/api/people/')
    .then(response => {
        // console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
        // console.log(error);
        res.json(error);
    });
});

// When Client Requests for Planets
app.get('/planets', function(req, res){
    axios.get('http://swapi.dev/api/planets/')
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        res.json(error);
    });
});

app.listen(8000, function(){
    console.log("Listening to Port 8000");
});