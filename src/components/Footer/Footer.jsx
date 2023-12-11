import React from 'react';
import './Footer.css';
import logo from './MindWisk Brand Board (5).png';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Grid } from '@mui/material';
import FacebookLogo from './FacebookLogo';

function Footer() {
  const history = useHistory();

  const disclaimer = () => {
    history.push('/disclaimer');
  };

  const admin = () => {
    history.push('/login');
  };

  function resizeImg(img, newWidth) {
    img.width = newWidth;
  }

  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <img src={logo} alt="MindWisk Logo" onLoad={(event) => resizeImg(event.target, 150)} />
          <br /><br />
          <Typography variant="body2" style={{ textAlign: 'left', fontSize: '1.5rem' }}>
            &copy; MindWisk
          </Typography>
          <br />
          <Button variant="outlined" onClick={disclaimer} style={{ color: 'white' }}>
            Disclaimer
          </Button>
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="right-content">
            <Typography variant="h6">Contact:</Typography>
            <br />
            <Typography variant="body2">MindWisk@gmail.com</Typography>
            <br />
            <Typography variant="body2">Social Media Links</Typography>
            <FacebookLogo />
            <br />
            <Button variant="outlined" onClick={admin} style={{ color: 'white' }}>
              Admin
            </Button>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
