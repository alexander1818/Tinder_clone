import { TActionType } from '../../api/fetchWrapper';
import { AuthActions } from '../types';

type TCreateUserInitState = {
  isCreatedUser: boolean;
  data: string;
  isError: string;
};

const initialState: TCreateUserInitState = {
  isCreatedUser: false,
  data: '',
  isError: '',
};

export const createAccountlReducer = (state = initialState, action: TActionType) => {
  switch (action.type) {
    case AuthActions.CREATE_ACCOUNT_SUCCESS:
      return { isCreatedUser: true, data: action.payload, isError: '' };
    case AuthActions.CREATE_ACCOUNT_ERROR:
      return { isCreatedUser: false, data: '', isError: action.payload };
    default:
      return state;
  }
};
