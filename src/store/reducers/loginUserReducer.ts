import { TActionType } from '../../api/fetchWrapper';
import { AuthActions, TLoginUserInitState } from '../types';

const initialState: TLoginUserInitState = {
  isLogin: false,
  data: '',
  isError: '',
};

export const loginUserlReducer = (state = initialState, action: TActionType) => {
  switch (action.type) {
    case AuthActions.LOGIN_USER_SUCCESS:
      return { isLogin: true, data: action.payload, isError: '' };
    case AuthActions.LOGIN_USER_ERROR:
      return { isLogin: false, data: '', isError: action.payload };
    default:
      return state;
  }
};
