import React, { useState } from "react";
import { useSelector } from "react-redux";
// import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AddressForm from './AddressForm';
import Review from './Review';
import DonationForm from './DonationForm';
import PaymentIntent from "./PaymentIntent";
import "./DonationPage.css"; 

const steps = ['Amount Selection', 'Donation Information', 'Payment details', 'Review your Donation Info'];

export default function DonationPage() {
  const [activeStep, setActiveStep] = useState(0);

  // Fetch donationAmount from the Redux store
  const donationAmount = useSelector(state => state.donationReducer.donationAmount);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <DonationForm />;
      case 1:
        return <AddressForm />;
      case 2:
        return <PaymentIntent amount={donationAmount} />;
      case 3:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }


  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar
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
            MindWisk Donation
          </Typography>
        </Toolbar>
      </AppBar> */}


      <div id='mpContainerOne'>
        <img src='./basicSMWoakjpg.jpg' alt='Silver MindWisk' />
      </div>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            MindWisk Donation
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
                Your Donation Confirmation number is #2001539. We have emailed your receipt confirmation.
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

            // <React.Fragment>
            //   {getStepContent(activeStep, handleAmountChange, donationAmount)}
            //   <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            //     {activeStep !== 0 && (
            //       <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            //         Back
            //       </Button>
            //     )}
            //     <Button
            //       variant="contained"
            //       onClick={handleNext}
            //       sx={{ mt: 3, ml: 1 }}
            //     >
            //       {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
            //     </Button>
            //   </Box>
            // </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}