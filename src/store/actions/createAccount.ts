import { Dispatch } from 'redux';
import { AuthActions, TAuthAccountData } from '../types';
import { authQuery } from '../../api/fetchWrapper';
import { API } from '../../api/API';

export const createAccountAction = (accountData: TAuthAccountData) => {
  return async (dispatch: Dispatch) => {
    await authQuery<TAuthAccountData>({ ...accountData }, API.registrationPath, {
      dispatch,
      success: { type: AuthActions.CREATE_ACCOUNT_SUCCESS },
      error: { type: AuthActions.CREATE_ACCOUNT_ERROR },
    });
  };
};
