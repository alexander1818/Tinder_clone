import { IAuthModal, AuthModalActions, TAuthModalAction } from '../types';

const initialState: IAuthModal = {
  open: false,
  authFormIndex: null,
};

export const authModalReducer = (state = initialState, action: TAuthModalAction): IAuthModal => {
  switch (action.type) {
    case AuthModalActions.SHOW_AUTH_MODAL:
      return { open: true, authFormIndex: action.payload };
    case AuthModalActions.CLOSE_AUTH_MODAL:
      return { open: false, authFormIndex: action.payload };
    default:
      return state;
  }
};
