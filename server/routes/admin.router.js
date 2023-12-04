const express = require('express');
const router = express.Router();
const { rejectIfNotAdmin } = require('../modules/authentication-middleware');

// Example Admin Route - Dashboard
router.get('/dashboard', rejectIfNotAdmin, (req, res) => {
  // Logic for the admin dashboard
  res.send('Admin Dashboard');
});

// Other admin routes can be defined here
// ...

module.exports = router;
