import React from 'react';
import MainRouter from 'routes';
import { AuthContextProvider } from './contexts/AuthContext';

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <MainRouter />
    </AuthContextProvider>
  );
}

export default App;
