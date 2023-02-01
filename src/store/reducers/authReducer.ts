import { IAuthModal, AuthModalActions, TAuthModalAction } from '../types';

const initialState: IAuthModal = {
  open: false,
  loading: false,
  error: null,
};

export const authModalReducer = (state = initialState, action: TAuthModalAction): IAuthModal => {
  switch (action.type) {
    case AuthModalActions.SHOW_AUTH_MODAL:
      return { open: !state.open, loading: false, error: null };
    case AuthModalActions.CLOSE_AUTH_MODAL:
      return { open: false, loading: false, error: null };
    default:
      return state;
  }
};
