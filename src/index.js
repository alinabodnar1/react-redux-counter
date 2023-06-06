import React from 'react';
import ReactDOM from 'react-dom/client';
import { App }  from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
// import './store/store';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
