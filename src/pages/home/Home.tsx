import { FC } from 'react';
import AuthModal from '../../components/auth/AuthModal';
import Navigation from '../../components/navigation/Navigation';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Home: FC = () => {
  const { authModaOpenlAction } = useActions();
  const { open } = useTypedSelector((state) => state.authModal);

  const handleAuthModal = () => {
    authModaOpenlAction();
  };

  const authToken = false;
  return (
    <div className="overlay">
      <Navigation />
      <div className="home">
        <h1>Swipe right&reg;</h1>
        <button className="primary-button" onClick={() => handleAuthModal()}>
          {authToken ? 'Signout' : 'Create Account'}
        </button>
        {open && <AuthModal />}
      </div>
    </div>
  );
};

export default Home;
