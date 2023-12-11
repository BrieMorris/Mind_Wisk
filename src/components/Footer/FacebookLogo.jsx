import React from 'react';
import Avatar from '@mui/material/Avatar';
import './facebook.png'

const FacebookLogo = () => {
  // Replace 'path/to/your/facebook-logo.png' with the actual path or URL to your image
  const logoUrl = 'facebook.png';

  return (
    <Avatar alt="Facebook Logo" src={logoUrl} sx={{ width: 100, height: 100 }} />
  );
};

export default FacebookLogo;
