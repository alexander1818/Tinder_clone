import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AuthModalActions } from '../../store/types';
import Logo from './logo/Logo';

const Navigation = () => {
  const { authModalOpenAction } = useActions();
  const { open } = useTypedSelector((state) => state.authModal);
  const { isCreatedUser } = useTypedSelector((state) => state.createAccount);

  const handleLogin = () => {
    authModalOpenAction(AuthModalActions.LOGIN_FORM_INDEX);
  };
  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>
      {!isCreatedUser && (
        <button
          onClick={() => handleLogin()}
          className="logo-container__nav-button"
          disabled={open}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Navigation;
