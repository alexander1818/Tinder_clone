import { Action, AnyAction, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { authModalReducer } from './authModalReducer';
import { createAccountlReducer } from './createAccountReducer';

export const rootReducer = combineReducers({
  authModal: authModalReducer,
  createAccount: createAccountlReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk<R = void> = ThunkAction<R, RootState, unknown, Action>;
