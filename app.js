const express = require('express');

const app = express();

const path = require('path');

const port = 3030;



app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/', (req, res) => {res.render('home')});

app.get('/header', (req, res) => {res.render('./partials/header')});

app.get('/login', (req, res) => {res.render('login')})

app.get('/register', (req, res) => {res.render('register')})

app.get('/productCart', (req, res) => {res.render('productCart')})

app.get('/productDetail', (req, res) => {res.render('productDetail')})

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));