import { AuthModalActions, TAuthModalAction } from '../types';

export const authModaOpenlAction = (): TAuthModalAction => {
  return { type: AuthModalActions.SHOW_AUTH_MODAL };
};
