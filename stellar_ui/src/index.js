import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import authenticationReducer from './reducers/authenticationReducer';
import UseInterceptor from './components/Common/httpIntercepter';


const logger = store => {
  return next => {
    return action => {
       const result = next(action);
       }
  }
}

const rootReducer  = combineReducers({
  authenticationReducer : authenticationReducer
})

 const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

//const store = createStore(rootReducer, applyMiddleware(logger));
UseInterceptor();


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
