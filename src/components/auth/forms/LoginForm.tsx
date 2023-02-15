import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { mainRoutes } from '../../../Routes/Routes';
import { TLoginData } from '../../../store/types';

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const { loginUserAction, authModalCloseAction } = useActions();
  const { isLogin } = useTypedSelector((state) => state.loginUser);
  const [loginData, setLoginData] = useState<TLoginData>({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (isLogin) {
      authModalCloseAction();
      navigate(mainRoutes.dashboard.path);
    }
  }, [isLogin]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUserAction({ ...loginData });
  };

  const handleChangeFields = (e: React.FormEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <div>
      <h2>Login</h2>
      <form className="auth-modal__form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="username"
          placeholder="Email"
          required={true}
          value={loginData.username}
          onChange={handleChangeFields}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          value={loginData.password}
          onChange={handleChangeFields}
        />
        <input className="secondary-button" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
