const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
import express from 'express';

export default function createStripeRoutes(stripe) {
    const router = express.Router();
/**
 * POST route template
 */
    router.post('/api/create-payment-intent', async (req, res) => {
        const { amount } = req.body;
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: 'usd',
                automatic_payment_methods: { enabled: true },
            });
            res.send({
                clientSecret: paymentIntent.client_secret, 
              });               
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    })
    return router;
}

/**
 * GET route template
 */
router.get('/create-payment-intent', (req, res) => {
  // GET route code here
res.send('Hello World!')
});

module.exports = router;
