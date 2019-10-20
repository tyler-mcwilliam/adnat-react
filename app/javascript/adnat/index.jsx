import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import shiftsReducer from './reducers/shifts_reducer';
import organisationsReducer from './reducers/organisations_reducer';

const adnatContainer = document.getElementById('adnat_app');

const initialState = {
  organisations: [],
  shifts: []
};

const reducers = combineReducers({
  shifts: shiftsReducer,
  organisations: organisationsReducer
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/organisations/:organisation" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  adnatContainer
);
