const movie = require('./movie');
const user = require('./user');

movie.sync({alter: true});
user.sync({alter: true});