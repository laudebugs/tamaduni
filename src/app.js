const express = require('express');
const path = require('path')
const publicPath = path.resolve(__dirname, "public");


const app = express();
app.use(express.static(publicPath));

app.set('view engine', 'hbs');


app.get('/', function(req, res){
    res.render('home.hbs')
})
app.get('/statements', function(req, res){
    res.render('statements')
})
app.get('/thesosianiproject', function(req, res){
    res.render('sosiani')
})
app.listen(3000);