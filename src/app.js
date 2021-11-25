const express = require('express');
const routes = require('./utils/route-handler');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);

module.exports = app;