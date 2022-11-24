const user = require('./user');
const movie = require('./movie');
const review = require('./review');

movie.hasMany(review);
review.belongsTo(movie, {
    onDelete: 'CASCADE',
});

user.sync({alter: true});
movie.sync({alter: true});
review.sync({alter: true});