import React from 'react';
import './Footer.css';
import logo from './MindWisk Brand Board (5).png';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Grid } from '@mui/material';
//Imported Logos
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ClearIcon from '@mui/icons-material/Clear';


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
   <Grid container justifyContent="space-between">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {/* Leftmost grid content */}
        <img src={logo} alt="MindWisk Logo" onLoad={(event) => resizeImg(event.target, 150)} />
        <br /><br />
        <Typography variant="body2" style={{ textAlign: 'left', fontSize: '1.5rem' }}>
          &copy; MindWisk
        </Typography>
        <br />
        <Button variant="outlined" onClick={disclaimer} style={{ color: 'white', backgroundColor: '#50C878' }}>
          Disclaimer
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Center grid content */}
        <div className="center-content">
      </div>
        <br /><br />
        <Typography variant="h6">CONTACT US:</Typography>
          <br />
          <Typography variant="body2">MindWisk@gmail.com</Typography>
          <br />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'right' }}> 
        {/* Rightmost grid content */}
        <div className="right-content">
          <br /><br />
          <Typography variant="h6">FOLLOW US</Typography>
          <br />

          <a href="https://www.facebook.com/MindWisk" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>

          <a href="https://www.instagram.com/mindwiskproject" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>

          <a href="https://twitter.com/MindWiskProject" target="_blank" rel="noopener noreferrer">
            <ClearIcon />
          </a>

          <a href="https://www.youtube.com/@MindWisk" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
          </a>
          <br /><br /><br /><br />
          <Button variant="outlined" onClick={admin} style={{ color: 'white', backgroundColor: '#50C878' }}>
            Admin
          </Button>
        </div>
      </Grid>
    </Grid>
    </footer>
  );
}

export default Footer;
