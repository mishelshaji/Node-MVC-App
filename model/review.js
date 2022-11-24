const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Movie = require('./movie');

const Review = sequelize.define('Review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    review: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
});

// Review.belongsTo(Movie);

module.exports = Review;