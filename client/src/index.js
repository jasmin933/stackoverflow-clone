import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import { createRoot } from 'react-dom/client';


import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


