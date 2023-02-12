import React, { FC, useState } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';
import { useActions } from '../../hooks/useActions';
import { TAuthAccountData } from '../../store/types';

const AuthModal: FC = () => {
  const { authModalOpenAction, createAccountAction } = useActions();
  const [accountForm, setAccountForm] = useState<TAuthAccountData>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleCloseModal = () => {
    authModalOpenAction();
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAccountAction({ ...accountForm });
  };

  const handleChangeFields = (e: React.FormEvent<HTMLInputElement>) => {
    setAccountForm({ ...accountForm, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div className="auth-modal">
      <img
        className="auth-modal__closeIcon"
        src={closeIcon}
        alt="closeIcon"
        onClick={() => handleCloseModal()}
      />
      <h2>Create account</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy
        Policy and Cookie Policy.
      </p>
      <form className="auth-modal__form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="username"
          placeholder="Email"
          required={true}
          value={accountForm.username}
          onChange={handleChangeFields}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          value={accountForm.password}
          onChange={handleChangeFields}
        />
        <input
          type="confirmPassword"
          name="confirmPassword"
          placeholder="ConfirmPassword"
          // required={true}
          value={accountForm.confirmPassword}
          onChange={handleChangeFields}
        />
        <input className="secondary-button" type="submit" />
        <hr />
        <h2>GET THE APP</h2>
      </form>
    </div>
  );
};

export default AuthModal;
