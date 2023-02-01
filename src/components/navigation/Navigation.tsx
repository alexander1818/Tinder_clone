import { useTypedSelector } from '../../hooks/useTypedSelector';
import Logo from './logo/Logo';

const Navigation = () => {
  const { open } = useTypedSelector((state) => state.authModal);
  //TODO: if auth true
  const auth = false;
  const handleLogin = () => {
    //
  };
  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>
      {!auth && (
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
