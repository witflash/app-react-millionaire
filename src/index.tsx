import React from 'react';
import ReactDOM from 'react-dom/client';
import { reduxStore } from 'store';
import { Provider } from 'react-redux';
import App from 'components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
