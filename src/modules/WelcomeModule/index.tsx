import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import WelcomePage from './pages/WelcomePage';

/**
 * Roteador principal do modulo Welcome
 *
 *  A variavel path sempre será com base na url da rota pai, neste caso root ='welcome' /
 *
 * @returns JSX.Element
 */
const WelcomeModule = (): JSX.Element => (
  <Routes>
    <Route path="/welcome" element={<WelcomePage />} />

    {/**
     * Adicione mais subrotas para o módulo
     *
     * ex: /welcome/intro
     *
     * <Route path="intro" element={<WelcomeIntroPage />} />
     */}
  </Routes>
);

export default WelcomeModule;
