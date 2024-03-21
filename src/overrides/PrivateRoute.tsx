import React from 'react';
import { Navigate } from 'react-router-dom';

import { loginPath } from '../constants';
import { JWT_KEY } from '../config/constant';

type PrivateRouteProps = {
  children: React.ReactElement;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = !!localStorage.getItem(JWT_KEY);

  return isAuthenticated ? children : <Navigate to={loginPath} />;
}
