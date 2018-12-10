const sequelize = require('sequelize');
const connection = new sequelize('moviedb', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql'
});

connection.authenticate()
  .then(() => console.log('Connected to moviedb database'))
  .catch(err => console.error(err));

module.exports = connection;
