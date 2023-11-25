const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
import cors from 'cors';
const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');


// Route includes
const userRouter = require('./routes/user.router');
const stripeRouter = require('./routes/stripe.router'); 

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());
app.use(cors()); 
app.use(json()); 


/* Routes */
app.use('/api/user', userRouter);
app.use('/api/stripe', stripeRouter); 

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
