import { useTypedSelector } from '../../hooks/useTypedSelector';
import Logo from './logo/Logo';

const Navigation = () => {
  const { open } = useTypedSelector((state) => state.authModal);
  const { isCreatedUser } = useTypedSelector((state) => state.createAccount);

  const handleLogin = () => {
    //
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
