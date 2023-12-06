const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

const ordersRouter = require('./routes/orders.router');

const galleryRouter = require('./routes/gallery.router')

const stripePaymentIntentRouter = require('./routes/stripePaymentIntent.router.js'); 




// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

app.use('/orders', ordersRouter);

app.use('/api/gallery', galleryRouter);

app.use('/create-payment-intent', stripePaymentIntentRouter)


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});














// const calculateDonationAmount = (donationTotal) => { 
//   //calcuation for confirming donation total and retruning it 
//   return 1400; 
// };


app.use(express.json()); 
app.use(cors({ origin: true })); 

app.use(stripeRoutes);
app.use(express.static("public")); 




import Stripe from 'stripe';
import express, {json} from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import createStripeRoutes from './routes/stripePaymentIntent.router.js';
const stripe = require ("stripe")('sk_test_fill in test security key'); 
const stripeRoutes = createStripeRoutes(stripe);
const cors = require("cors"); 