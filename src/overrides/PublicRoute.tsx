import React from 'react';
import { Navigate } from 'react-router-dom';

import { boardPath } from '../constants';
import { JWT_KEY } from '../constants';

type PublicRouteProps = {
  children: React.ReactElement;
};

export function PublicRoute({ children }: PublicRouteProps) {
  const isAuthenticated = !!localStorage.getItem(JWT_KEY);

  return isAuthenticated ? <Navigate to={boardPath} /> : children;
}
