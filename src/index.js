import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {converter} from "./reducer";
import { createStore } from "redux";
import {Provider} from "react-redux";

const store = createStore(converter)

store.subscribe(()=>{
    console.log(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

