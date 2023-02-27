import { TActionType } from '../../api/fetchWrapper';
import { TUserInitState, UserActions } from '../types';

const initialState: TUserInitState = {
  isAuthUser: false,
  user: { username: '', id: '' },
  isError: '',
};

export const userMeReducer = (state = initialState, action: TActionType) => {
  switch (action.type) {
    case UserActions.USER_ME_SUCCESS:
      return { ...state, user: action.payload, isAuthUser: true, isError: '' };
    case UserActions.USER_ME_ERROR:
      return { ...state, user: {}, isAuthUser: false, isError: action.payload };
    default:
      return state;
  }
};
