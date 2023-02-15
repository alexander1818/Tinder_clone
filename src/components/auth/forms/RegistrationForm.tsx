import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { mainRoutes } from '../../../Routes/Routes';
import { TAuthAccountData } from '../../../store/types';

const RegistrationForm: FC = () => {
  const navigate = useNavigate();
  const { createAccountAction, authModalCloseAction } = useActions();
  const { isCreatedUser } = useTypedSelector((state) => state.createAccount);
  const [accountForm, setAccountForm] = useState<TAuthAccountData>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (isCreatedUser) {
      authModalCloseAction();
      navigate(mainRoutes.onBoarding.path);
    }
  }, [isCreatedUser]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAccountAction({ ...accountForm });
  };

  const handleChangeFields = (e: React.FormEvent<HTMLInputElement>) => {
    setAccountForm({ ...accountForm, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div>
      <h2>Create account</h2>
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
      </form>
    </div>
  );
};

export default RegistrationForm;
