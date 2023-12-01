


//TODO ADD TEST STRIPE API KEY 
const stripe = require('stripe')("sk_test_fill in security test key"); 
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
  res.send("IT WORKS ")
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
