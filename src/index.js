import React from 'react';
import ReactDOM from 'react-dom';
import App from './root/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
