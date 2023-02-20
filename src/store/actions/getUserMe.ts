import { Dispatch } from 'redux';
import { UserActions } from '../types';
import { httpQuery } from '../../api/fetchWrapper';
import { API } from '../../api/API';

export const getUserMeAction = () => {
  return async (dispatch: Dispatch) => {
    await httpQuery('GET', API.userMe, {
      dispatch,
      success: { type: UserActions.USER_ME_SUCCESS },
      error: { type: UserActions.USER_ME_ERROR },
    });
  };
};
