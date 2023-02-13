import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { mainRoutes } from './Routes';

type IProps = {
  children: ReactElement;
};

const PrivateRoute: FC<IProps> = ({ children }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to={mainRoutes.home.path} />;
  }
  return children;
};

export default PrivateRoute;
