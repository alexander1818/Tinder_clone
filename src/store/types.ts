export enum AuthModalActions {
  SHOW_AUTH_MODAL = 'SHOW_AUTH_MODAL',
  CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL',
}

export interface IAuthModal {
  open: boolean;
  loading: boolean;
  error: null | string;
}

export interface IAuthModalAction {
  type: string;
}

interface IShowAuthModal {
  type: AuthModalActions.SHOW_AUTH_MODAL;
}
interface ICloseAuthModal {
  type: AuthModalActions.CLOSE_AUTH_MODAL;
}

export type TAuthModalAction = IShowAuthModal | ICloseAuthModal;
