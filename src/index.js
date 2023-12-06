import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {AuthProvider} from './context/AuthProvider'
import store from './redux/store';

import App from './components/App/App';



const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
<AuthProvider>
    <Provider store={store}>

      <App />

    </Provider>
    </AuthProvider>
  </React.StrictMode>
);
