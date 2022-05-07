import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeModule from 'modules/WelcomeModule/index';
import Navbar from 'components/common/layout/Navbar';
import Sidebar from 'components/common/layout/Sidebar';
import * as S from './WorkspaceRoot.styles';

// Modules

type WorkspaceModuleProps = S.Variants;

/**
 * Este é o componente principal que roteia todas as rotas protegidas, ele representa nosso Root da Area de Trabalho
 * Local ideal para posicionar Navbars, Footers e Sidebars que sejam padrão a todos os módulos.
 *
 * Cada módulo contem seu conjunto de subrotas
 * Modulos representam uma grande funcionalidade.
 * A variavel path sempre será com base na url da rota pai, neste caso ' /'
 *
 * @returns JSX.Element
 */

const WorkspaceRootModule = ({ layout }: WorkspaceModuleProps): JSX.Element => (
  <>
    <S.WorkspaceNavbarWrapper>
      <Navbar />
    </S.WorkspaceNavbarWrapper>

    <S.WorkspaceLayout layout={layout} debug>
      <S.WorkspaceSidebarWrapper>
        <Sidebar />
      </S.WorkspaceSidebarWrapper>

      <S.WorkspaceContentWrapper>
        <Routes>
          <Route path="/" element={<WelcomeModule />} />

          {/**
           * Adicione mais subrotas para o módulo
           *
           * ex:
           *
           * <Route path='users' element={<UsersModule />} />
           * <Route path='settings' element={<SettingsModule />} />
           */}
        </Routes>
      </S.WorkspaceContentWrapper>
    </S.WorkspaceLayout>
  </>
);

export default WorkspaceRootModule;
