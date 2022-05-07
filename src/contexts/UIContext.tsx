/* eslint-disable @typescript-eslint/no-empty-function */

// Contexto UI:
// Dados de estado da interface.
// Armazena coisas como tema selecionado, tipo de layout, id de dialogs globais.

import { createContext } from 'react';

const UIContext = createContext({
  theme: 'base-theme',
  setTheme: () => {},
});

export default UIContext;
