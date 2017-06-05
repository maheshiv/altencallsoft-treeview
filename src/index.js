import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import treeReducer from './treeReducer'
import './index.css';

const initialState = {
  tree: [{
    node: {
      id: "1",
      description: "test1",
      children: [{
        node: {
          id: "1_1",
          description: "test1_1",
          children: []
        }
      }, {
        node: {
          id: "1_2",
          description: "test1_2",
          children: [{
            node: {
              id: "1_2_1",
              description: "test1_2_1",
              children: []
            }
          }]
        }
      }]
    }
  }],
  filter: ''
}

const store = createStore(treeReducer, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
