const theme = createTheme({
    palette: {
      primary: { main: '#bc232a', },
      secondary: { main: '#c9dde9' },
    },
    typography:{
        fontFamily: [
            'Roboto',
            '-apple-system',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    }
  });

  export default theme;


import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const QueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);