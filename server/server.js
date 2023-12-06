const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require("cors"); 
const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');


// const ordersRouter = require('./routes/orders.router');

// const galleryRouter = require('./routes/gallery.router')

const stripePaymentIntentRouter = require('./routes/stripePaymentIntent.router.js'); 

const ordersRouter = require('./routes/orders.router');

const galleryRouter = require('./routes/gallery.router')
const cloudinaryRouter = require('./routes/cloudinary.router')


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//CORS 
app.use(cors({ origin: true })); 

/* Routes */
app.use('/api/user', userRouter);


// app.use('/orders', ordersRouter);

// app.use('/api/gallery', galleryRouter);

app.use('/api/create-payment-intent', stripePaymentIntentRouter)

app.use('/orders', ordersRouter);

app.use('/api/gallery', galleryRouter);
app.use('api/cloudinary' , cloudinaryRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});