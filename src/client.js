import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import reducers from './reducers';
import appSaga from './saga';

const initialState = window.__REDUX_STATE__ || {};
const store = configureStore(initialState);

// async saga run
store.runSaga(appSaga);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('content')
);
