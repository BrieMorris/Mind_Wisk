import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Typography, Grid } from '@mui/material';

// ThankYouPage is what the order page is routed to after a user places their order.
function ThankYouPage(props) {
  const history = useHistory();

  const handleClick = () => {
    history.push('./donate');
  };

  const containerStyle = {
    textAlign: 'center', // Center-align text
    marginTop: '50px', // Optional: Add margin from the top for spacing
  };

  return (
    <div style={containerStyle}>
      <h2> Thank You! </h2>
      <p>Spread joy by donating today!</p>
      <Button variant="outlined" onClick={handleClick} style={{ color: 'white', backgroundColor: '#50C878' }}>
              DONATE
        </Button>
    </div>
  );
}

export default ThankYouPage;
