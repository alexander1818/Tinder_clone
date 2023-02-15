//AuthModal
export enum AuthModalActions {
  SHOW_AUTH_MODAL = 'SHOW_AUTH_MODAL',
  CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL',
  REGISTRATION_FORM_INDEX = 0,
  LOGIN_FORM_INDEX = 1,
}

export enum AuthActions {
  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS',
  CREATE_ACCOUNT_ERROR = 'CREATE_ACCOUNT_ERROR',
  CREATE_ACCOUNT_UPDATE = 'CREATE_ACCOUNT_UPDATE',
  LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
}

export interface IAuthModal {
  open: boolean;
  authFormIndex: number | null;
}

export interface IAuthModalAction {
  type: string;
}

interface IShowAuthModal {
  type: AuthModalActions.SHOW_AUTH_MODAL;
  payload: number | null;
}
interface ICloseAuthModal {
  type: AuthModalActions.CLOSE_AUTH_MODAL;
  payload: number | null;
}

export type TAuthModalAction = IShowAuthModal | ICloseAuthModal;

//NewAccount
export type TCreateUserInitState = {
  isCreatedUser: boolean;
  data: string;
  isError: string;
};

export type TAuthAccountData = {
  username: string;
  password: string;
  confirmPassword?: string;
};

export type TNewAccount = {
  first_name: string;
  dob_day: string;
  dob_month: string;
  dob_year: string;
  show_gender: boolean;
  gender_identity: string;
  gender_interest: string;
  url: string;
  about: string;
  matches: [];
};

//Login
export type TLoginUserInitState = {
  isLogin: boolean;
  data: string;
  isError: string;
};

export type TLoginData = {
  username: string;
  password: string;
};
