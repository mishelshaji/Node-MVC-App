const express = require('express');
const parser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const accountRoutes = require('./routes/accountsRoutes');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'))

app.use("/", parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));
app.use(movieRoutes);
app.use(accountRoutes);

app.listen(80);