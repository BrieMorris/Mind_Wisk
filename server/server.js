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
// const stripeRouter = require('./routes/stripe.router'); 
// const stripePaymentIntentRouter = require('./routes/stripe.paymentIntent.router'); 

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors()); 
// app.use(express.static("public")); 
// app.use(json()); 

// const calculateDonationAmount = (donationTotal) => { 
//   //calcuation for confirming donation total and retruning it 
//   return 1400; 
// };

// app.post("/create-payment-intent", async (req, res) => { 
//   const { items } = req.body; 

//   // create a PaymentIntent with the order amount and currency 
//   const paymentIntent = await stripe.paymentIntents.create({ 
//     amount: calculateOrderAmount(items), 
//     currency: "usd", 
//     //accepts payment methods that you enable in the Dashboard and that are compatible with this PaymentIntent’s other parameters
//     //adjust in dashboard 
//     automatic_payment_methods: { 
//       enabled: true, 
//     }, 
//   })
// }); 

// res.send({
//   clientSecret: paymentIntent.client_secret, 
// }); 



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
