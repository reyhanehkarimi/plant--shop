// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // استفاده از createRoot
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
