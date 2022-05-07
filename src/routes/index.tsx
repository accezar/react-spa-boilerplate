import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Modules
import GuestModule from 'modules/GuestModule';
import AuthModule from 'modules/AuthModule';
import WorkspaceRootModule from 'modules/WorkspaceRoot';
import { globalCavilhaCss } from '@cavilha/theme';
import ProtectedRoute from './ProtectedRoute';

/**
 * Este é o roteador principal
 * Rota principal assume que o usuário estará logado, rediciona para fluxo principal da Aplicacao.
 * Caso não, rediciona para fluxo do Modulo de Autenticacao.
 *
 * @returns JSX.Element
 */

const globalStyles = globalCavilhaCss({
  'html, body, #root': {
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  '*': { margin: 0, padding: 0 },
});

export default function MainRouter(): JSX.Element {
  globalStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <WorkspaceRootModule />
            </ProtectedRoute>
          }
        />
        <Route path="/guest/*" element={<GuestModule />} />
        <Route path="/auth/*" element={<AuthModule />} />
      </Routes>
    </BrowserRouter>
  );
}
