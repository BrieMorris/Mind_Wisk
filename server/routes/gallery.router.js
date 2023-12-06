const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { default: logger } = require('redux-logger');

/**
 * GET route for user gallery page 
 */
router.get('/', (req, res) => {

  const queryText = `SELECT * FROM images;`
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get gallery image', err);
      res.sendStatus(500)
    })
});

/**
 * POST route will be part of Admin Page
 */
router.post('/', (req, res) => {
  
  console.log(req.body);
  const queryText = `INSERT INTO "images" ("image", "description")
  VALUES ($1,$2);`

});

module.exports = router;
