const Sequelize = require('sequelize');
const connection = require('../db/db');

const Movie = connection.define('movie', {
  title: {
    type: Sequelize.STRING,
    unique : true
  },
  watched: {
    type: Sequelize.BOOLEAN, 
    defaultValue: false
  }
});

Movie.sync();


module.exports = Movie;
