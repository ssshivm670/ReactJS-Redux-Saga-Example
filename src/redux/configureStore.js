// import {combineReducers, createSt}
import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducers/user";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sages/rootSaga";

const reducer = combineReducers({
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);
export default store;
