import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const app = (
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
