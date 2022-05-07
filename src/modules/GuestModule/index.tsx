import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import GuestPage from './pages/GuestPage';

const GuestModule = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<GuestPage />} />

    {/**
     * Adicione mais subrotas para o módulo
     *
     * ex:
     *
     * <Route path='intro' element={<GuestIntroPage />} />
     */}
  </Routes>
);

export default GuestModule;
