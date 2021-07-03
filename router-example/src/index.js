import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobleContextProvider } from './components/context/auth/AuthContext';


ReactDOM.render(
  <React.StrictMode>
  <GlobleContextProvider>
  <App />
  </GlobleContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

