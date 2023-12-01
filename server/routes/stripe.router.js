


//TODO ADD TEST STRIPE API KEY 
const stripe = require('stripe')("sk_test_fill in security test key"); 
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//install in terminal and maybe move over to server.js 
//use for unique user id if needed. 
const uuid = require("uuid/v4"); 


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
