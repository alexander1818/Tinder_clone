import { applyMiddleware, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;
