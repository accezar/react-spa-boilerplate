/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

// Contexto app:
// Dados de estado da aplicacao (nao eh uma global store)
// Armazena pedacoes de informacoes que nao cabem em outro contexto porem sao usadas globalmente.

const AppContext = createContext({});

export default AppContext;
