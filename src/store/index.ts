import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type AppDispatch = typeof store.dispatch;
