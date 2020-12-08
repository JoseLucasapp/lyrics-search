const express = require('express');
const consign = require('consign');
const {body, validationResult} = require('express-validator');
const jspdf = require('jspdf');
const bodyParser = require('body-parser');

let app = express();

module.exports = app;