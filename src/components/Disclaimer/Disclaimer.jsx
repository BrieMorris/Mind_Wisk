import React from 'react';
import { Typography, Paper } from '@mui/material';
import CustomizedAccordions from './Accordion.jsx';
function Disclaimer() {
    const disclaimerContainerStyle = {
        padding: '50px',
        maxWidth: '1100px',
        margin: 'auto',
        marginTop: '16px',
        backgroundColor: '#f5f5f5',
    };

    const titleStyle = {
        marginBottom: '12px',
        color: '#356390',
    };

    const secondSectionStyle = {
        marginTop: '24px',
    };

    return (
        <Paper elevation={3} style={disclaimerContainerStyle}>
            <div>
                <Typography variant="h4" style={titleStyle}>
                    Disclaimer/Privacy Policy
                </Typography>
                <Typography variant="body1">
                    Privacy Policy and Disclaimer
                    <br /><br />
                    Last Updated: [12-7-2023]
                    <br /><br />
                    Privacy Policy:
                    <br /><br />
                    This Privacy Policy describes how MindWisk collects, uses, and discloses your personal information when you visit our website [www.yourwebsite.com] (the "Site").
                    <br /><br />
                    Information We Collect:
                    <br /><br />
                    1. Personal Information:

                    We may collect personal information such as your name, email address, and other contact details when you voluntarily provide them through forms on our Site.
                    <br /><br />
                    2. Automatically Collected Information:
                    <br /><br />
                    We may automatically collect certain information when you visit our Site, such as your IP address, browser type, and device information.
                    <br /><br />
                
             </Typography>
            </div>

            <div style={secondSectionStyle}>
                <Typography variant="h4" style={titleStyle}>
                    FAQs
                </Typography>
                <CustomizedAccordions />
            </div>
        </Paper>
        
    );
}

export default Disclaimer;
