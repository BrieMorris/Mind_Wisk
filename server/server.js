import Stripe from 'stripe';
import express, {json} from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import createStripeRoutes from './routes/stripe.js';

const cors = require("cors"); 
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(( {path: '../.env'}));
const app = express();
const stripe = require ("stripe")('sk_test_fill in test security key'); 
const stripeRoutes = createStripeRoutes(stripe);

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');


// Route includes
const userRouter = require('./routes/user.router');

// const stripeRouter = require('./routes/stripe.router'); 
// const stripePaymentIntentRouter = require('./routes/stripe.paymentIntent.router'); 


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cors({ origin: true })); 
app.use(express.static("public")); 
app.use(stripeRoutes);

// app.use(json()); 

// const calculateDonationAmount = (donationTotal) => { 
//   //calcuation for confirming donation total and retruning it 
//   return 1400; 
// };

app.get('/create-payment-intent'); 

app.post("/create-payment-intent"); 


// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());



/* Routes */
app.use('/api/user', userRouter);
// app.use('/api/PaymentMethod', stripePaymentMethodRouter);
// app.use('/api/PaymentIntent, stripePaymentIntentRouter') 

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
