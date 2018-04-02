import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp  />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
