const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.post('/', (req, res) => {
  const orderInfo = req.body;
  const clientIp = req.ip; // Capture the client's IP address
  const timestamp = new Date().toISOString(); // Generate a timestamp

  const queryText = `INSERT INTO "orders" ("firstname", "lastname", "address" ,"address2","city", "state", "zipcode", "country", "email", "donation", "ipaddress", "timestamp") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id;`;
  pool
    .query(queryText, [orderInfo.firstname, orderInfo.lastname, orderInfo.address, orderInfo.address2, orderInfo.city, orderInfo.state, orderInfo.zipcode, orderInfo.country, orderInfo.email, orderInfo.donation, clientIp, timestamp])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`Error adding order: ${err}`);
      res.sendStatus(500);
    });
});

// GET endpoint to retrieve all user data
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "orders";`;
  console.log('query', queryText);
  pool.query(queryText)
    .then((result) => {
      // Send the retrieved data as a JSON response
      res.send(result.rows);
    })
    .catch((err) => {
      console.error('Error fetching user data:', err);
      res.sendStatus(500);
    });
});


module.exports = router;
