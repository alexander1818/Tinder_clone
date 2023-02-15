import { AuthModalActions, TAuthModalAction } from '../types';

export const authModalOpenAction = (formIndex: number): TAuthModalAction => {
  return { type: AuthModalActions.SHOW_AUTH_MODAL, payload: formIndex };
};

export const authModalCloseAction = (): TAuthModalAction => {
  return { type: AuthModalActions.CLOSE_AUTH_MODAL, payload: null };
};
