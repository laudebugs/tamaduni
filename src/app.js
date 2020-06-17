const express = require('express');
const path = require('path')
const publicPath = path.resolve(__dirname, "public");


const app = express();
app.use(express.static(publicPath));

app.set('view engine', 'hbs');


app.get('/', function(req, res){
    res.render('home.hbs');
})
app.get('/research', function(req, res){
    res.render('research.hbs');
})
app.get('/privacy-policy', function(req, res){
    res.render('privacy-policy.hbs');
})

app.get('/statements', function(req, res){
    res.render('statements.hbs')
})
app.get('/thesosianiproject', function(req, res){
    res.redirect('https://thesosianiproject.tamaduni.org/')
})
app.listen(3000);