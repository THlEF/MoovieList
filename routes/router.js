const router = require('express').Router();
const movieController = require('../controllers/MoviesController');

// CREATE
router.post('/movies', movieController.create);

// READ ALL
router.get('/movies', movieController.findAll);

// READ ONE
// router.get('/movies/:title', );

// UPDATE

// DELETE

// SEARCH


module.exports = router;
