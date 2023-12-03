// const cors = require("cors"); 
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
// const stripe = require ("stripe")('sk_test_fill in test security key'); 


const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');


// Route includes
const userRouter = require('./routes/user.router');
const stripeRouter = require('./routes/stripe.router'); 
const stripePaymentIntentRouter = require('./routes/stripe.paymentIntent.router'); 

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors()); 
// app.use(json()); 


// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());



/* Routes */
app.use('/api/user', userRouter);
app.use('/api/PaymentMethod', stripePaymentMethodRouter);
app.use('/api/PaymentIntent, stripePaymentIntentRouter') 

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
