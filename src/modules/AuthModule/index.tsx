import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import FirstAccessPage from './pages/FirstAccessPage';
import AuthModuleTemplate from './AuthModule.template';

const bgURL = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174';

const AuthModule = (): JSX.Element => (
  <AuthModuleTemplate layout="splitted" backgroundUrl={bgURL} debug>
    <Routes>
      <Route path="/" element={<FirstAccessPage />} />
    </Routes>
  </AuthModuleTemplate>
);

export default AuthModule;
