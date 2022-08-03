import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{
      main:'#293b4c'
    },
    secondary:{
      main:'hsl(0, 0%, 52%)'
    }
  },
  shape:{
    borderRadius:7
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
   
  </React.StrictMode>
);


