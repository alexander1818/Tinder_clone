import { TActionType } from '../../api/fetchWrapper';
import { TUserInitState, UserActions } from '../types';

const initialState: TUserInitState = {
  user: { username: '', id: '' },
  isError: '',
};

export const userMeReducer = (state = initialState, action: TActionType) => {
  switch (action.type) {
    case UserActions.USER_ME_SUCCESS:
      return { ...state, user: action.payload, isError: '' };
    case UserActions.USER_ME_ERROR:
      return { user: {}, isError: action.payload };
    default:
      return state;
  }
};
