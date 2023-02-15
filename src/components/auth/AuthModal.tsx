import { FC } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';

const AuthModal: FC = () => {
  const { authModalCloseAction } = useActions();
  const { authFormIndex } = useTypedSelector((state) => state.authModal);

  const authForm = [<RegistrationForm />, <LoginForm />];

  const handleCloseModal = () => {
    authModalCloseAction();
  };

  return (
    <div className="auth-modal">
      <img
        className="auth-modal__closeIcon"
        src={closeIcon}
        alt="closeIcon"
        onClick={() => handleCloseModal()}
      />
      <p>
        By clicking Submit, you agree to our terms. Learn how we process your data in our Privacy
        Policy and Cookie Policy.
      </p>
      {authForm[authFormIndex as number]}
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
