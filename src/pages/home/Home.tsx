import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthModal from '../../components/auth/AuthModal';
import Navigation from '../../components/navigation/Navigation';
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { authModaOpenlAction } from '../../store/actions/authModal';

const Home = () => {
  const dispatch = useAppDispatch();
  const { open } = useTypedSelector((state) => state.authModal);
  console.log(open);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthModal = () => {
    // setShowAuthModal(!showAuthModal);
    dispatch(authModaOpenlAction());
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
        {showAuthModal && <AuthModal />}
      </div>
    </div>
  );
};

export default Home;
