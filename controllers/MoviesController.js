const Movie = require('../models/MovieModel');

const create = (req, res, next) => {
  // create movie

  // receive movie data in the req (title, string)
  // query the database (insert into movie table)
  Movie.create({ title: req.body.title })
    .then(movie => {
      console.log('Movie created');
      res.status(201);
      res.send('Movie created');
    })
    .catch(err => {
      console.log('FAILED: Movie creation', err);
      res.status(500);
      res.send(err);
    });
};

const findAll = (req, res, next) => {
  Movie.findAll()
    .then(movies => {
      console.log('SUCCESS: got all movies');
      res.status(200);
      res.send(movies);
    })
    .catch(err => {
      console.log('FAILED: getting all movies');
      res.status(500);
      res.send(err);
    });
};

// const find = (req, res, next) => {
//   Movie.find()
//   .then(movies => {
//     console.log('SUCCESS: got all movies');
//     res.status(200);
//     res.send(movies);
//   })
//   .catch(err => {
//     console.log('FAILED: getting all movies');
//     res.status(500);
//     res.send(err);
//   })
// };

module.exports = {
  create,
  findAll,
  // find
};
