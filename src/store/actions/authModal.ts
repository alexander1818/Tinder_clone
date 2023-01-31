import { Dispatch } from 'redux';
import { AuthModalActions, IAuthModal, IAuthModalAction, TAuthModalAction } from '../types';

export const authModaOpenlAction = () => {
  return (dispatch: Dispatch<TAuthModalAction>) => {
    dispatch({ type: AuthModalActions.SHOW_AUTH_MODAL });
  };
};
