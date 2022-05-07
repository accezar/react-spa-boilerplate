/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const auth = { user: 'Anna' };
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /auth module, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
