import { combineReducers } from 'redux';
import { authModalReducer } from './authReducer';

export const rootReducer = combineReducers({
  authModal: authModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
