import React, { useState, useEffect } from "react";
import './DonationPage.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
import Review from './Review';
import DonationForm from './DonationForm';





import DonationCheckoutForm from "./DonationCheckoutForm";
// Payment Intent and Parent component for paymentelement 





function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/donate#/home">
        MindWisk
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const steps = ['Donate Selection', 'Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DonationForm />;
    case 1:
      return <AddressForm />;
    case 2:
      return <DonationCheckoutForm />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
};

//Calling `loadStripe` outside of a component's to render to avoid recreating the `Stripe` obect on every render. 
// intizalize Stripe Object 
// calling loadStripe loads latest version of stripe.js, helps with security. 
const stripePromise = loadStripe('pk_test_fillin');  // fill in the the test 






function DonationPage() {

  const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      const createPaymentIntent = async (amount) => {
        try {
          const response = await fetch('/api/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amount }),
          });
          const data = await response.json();
          setClientSecret(data.clientSecret);
        } catch (error) {
          console.error("Error creating payment intent:", error);
        }
      };
    
      // Calls the function with the actual amount 
      createPaymentIntent(yourAmountVariable); // 'yourAmountVariable' gets replaces with amount value 
    
    }, []);

const appearance = {
  theme: 'stripe',
};
const options = {
  // passing the client secret obtained from the server
  clientSecret: '{{CLIENT_SECRET}}',
  appearance,
};


const [activeStep, setActiveStep] = React.useState(0);

const handleNext = () => {
  setActiveStep(activeStep + 1);
};

const handleBack = () => {
  setActiveStep(activeStep - 1);
};

return (
  <div className='donationPage'>
    {clientSecret && (
      <Elements options={options} stripe={stripePromise}>
        <React.Fragment>
          <CssBaseline />
          <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
              position: 'relative',
              borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
          >
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                MindWisk
              </Typography>
            </Toolbar>
          </AppBar>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your Donation.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your Donation Confirmatin number is is #2001539. We have emailed your recipt
                    confirmation.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Paper>
            <Copyright />
          </Container>
        </React.Fragment>
      </Elements>
    )}
  </div>
)
};

export default DonationPage; 