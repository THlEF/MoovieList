const db = require('./db/db');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./routes/router');

const port = 3000;

// MIDDLEWARE
app.use(morgan('tiny')); // logging requests
app.use(cors()); // auto-set up headers
app.use(bodyParser.urlencoded({ extended: false })); // parses post data
app.use(bodyParser.json());

// ROUTES
app.use('/', router);

// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({ error: 'Not Found' });
});

// START SERVER
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
