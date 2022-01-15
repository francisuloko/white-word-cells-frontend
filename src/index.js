import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import { AlertProvider } from './features/Alerts/AlertProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
