import * as authModal from './authModal';
import * as createAccount from './createAccount';
import * as loginUserAction from './loginUserAction';

export default {
  ...authModal,
  ...createAccount,
  ...loginUserAction,
};
