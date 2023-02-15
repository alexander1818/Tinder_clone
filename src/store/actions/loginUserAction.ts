import { Dispatch } from 'redux';
import { AuthActions, TLoginData } from '../types';
import { authQuery } from '../../api/fetchWrapper';
import { API } from '../../api/API';

export const loginUserAction = (usertData: TLoginData) => {
  return async (dispatch: Dispatch) => {
    await authQuery<TLoginData>({ ...usertData }, API.loginPath, {
      dispatch,
      success: { type: AuthActions.LOGIN_USER_SUCCESS },
      error: { type: AuthActions.LOGIN_USER_ERROR },
    });
  };
};
