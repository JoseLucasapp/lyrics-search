const express = require('express');
const consign = require('consign');
const {body, validationResult} = require('express-validator');
const bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended: true}));

consign().include('app/models')
    .then('app/controllers')
    .then('config/pdfGenerator.js')
    .then('app/routes').into(app);

module.exports = app;