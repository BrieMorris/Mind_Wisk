import React from 'react';
import { Typography, Paper } from '@mui/material';

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
        color: '#787878',
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu felis varius
                    congue. Proin eget feugiat nisl. Quisque tincidunt tincidunt erat, vitae consectetur elit
                    gravida vel. Nulla facilisi. Vivamus auctor felis a eros rhoncus, vel hendrerit nisi
                    venenatis. Aenean eu eros id orci cursus laoreet non a nibh. In hac habitasse platea
                    dictumst. Fusce vel orci vel ligula auctor interdum. Sed sollicitudin augue in justo
                    fermentum, vel dapibus augue venenatis.
                </Typography>
            </div>
            
            <div style={secondSectionStyle}>
                <Typography variant="h4" style={titleStyle}>
                    FAQs
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu felis varius
                    congue. Proin eget feugiat nisl. Quisque tincidunt tincidunt erat, vitae consectetur elit
                    gravida vel. Nulla facilisi. Vivamus auctor felis a eros rhoncus, vel hendrerit nisi
                    venenatis. Aenean eu eros id orci cursus laoreet non a nibh. In hac habitasse platea
                    dictumst. Fusce vel orci vel ligula auctor interdum. Sed sollicitudin augue in justo
                    fermentum, vel dapibus augue venenatis.
                </Typography>
            </div>
        </Paper>
    );
}

export default Disclaimer;
