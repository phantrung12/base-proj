import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import getStore from './store/configureStore';
import './locales/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const store = getStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
