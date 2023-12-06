import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/donate#/home">
        MindWisk
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}