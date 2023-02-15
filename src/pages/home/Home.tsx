import { FC } from 'react';
import AuthModal from '../../components/auth/AuthModal';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { AuthModalActions } from '../../store/types';

const Home: FC = () => {
  const { authModalOpenAction } = useActions();
  const { open } = useTypedSelector((state) => state.authModal);

  const handleAuthModal = () => {
    authModalOpenAction(AuthModalActions.REGISTRATION_FORM_INDEX);
  };

  const authToken = false;
  return (
    <div className="overlay">
      <div className="home">
        <h1 className="home__primery-title">Swipe right&reg;</h1>
        <button className="primary-button" onClick={() => handleAuthModal()}>
          {authToken ? 'Signout' : 'Create Account'}
        </button>
        {open && <AuthModal />}
      </div>
    </div>
  );
};

export default Home;
