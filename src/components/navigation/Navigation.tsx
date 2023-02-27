import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../api/fetchWrapper';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { mainRoutes } from '../../Routes/Routes';
import { AuthModalActions, TUserInitState } from '../../store/types';
import Logo from './logo/Logo';

const Navigation = () => {
  const { authModalOpenAction, getUserMeAction } = useActions();
  const { open } = useTypedSelector((state) => state.authModal);
  const { isCreatedUser } = useTypedSelector((state) => state.createAccount);
  const { isAuthUser } = useTypedSelector<TUserInitState>((state) => state.userMe);
  const { isLogin } = useTypedSelector((state) => state.loginUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate(mainRoutes.home.path);
    }
    return () => {
      getUserMeAction();
    };
  }, [isLogin, isCreatedUser, isAuthUser]);
  console.log(isLogin, isCreatedUser, isAuthUser);

  const handleLogin = () => {
    authModalOpenAction(AuthModalActions.LOGIN_FORM_INDEX);
  };
  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>
      {!isAuthUser ? (
        <button
          onClick={() => handleLogin()}
          className="logo-container__nav-button"
          disabled={open}
        >
          Log in
        </button>
      ) : (
        <button
          onClick={() => handleLogout()}
          className="logo-container__nav-button"
          disabled={open}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navigation;
