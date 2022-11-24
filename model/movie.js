const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Review = require('./review');

const Movie = sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    summary: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    director: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

// Movie.hasMany(Review)
module.exports = Movie;