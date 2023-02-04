import { AuthModalActions, TAuthModalAction } from '../types';

export const authModalOpenAction = (): TAuthModalAction => {
  return { type: AuthModalActions.SHOW_AUTH_MODAL };
};
