import * as authModal from './authModal';
import * as createAccount from './createAccount';
import * as loginUserAction from './loginUserAction';
import * as getUserMe from './getUserMe';

export default {
  ...authModal,
  ...createAccount,
  ...loginUserAction,
  ...getUserMe,
};
