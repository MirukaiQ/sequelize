const express = require('express');
const router = require('./routers');
const app = express();

const bodyParser = express.json();

app.use(bodyParser); 

app.use(function (err, req, res, next) {

    res.status(500).send({
      errors: [{ message: err.message }],
    });
  });

app.use('/api', router);

module.exports = app;