import React from 'react';
// Pages
import * as S from './AuthModule.styles';

type AuthModuleTemplateProps = {
  children?: React.ReactNode;
  backgroundUrl?: string;
} & S.Variants;

const AuthModuleTemplate = ({
  children,
  debug,
  backgroundUrl,
  layout,
}: AuthModuleTemplateProps): JSX.Element => (
  <S.AuthModuleTemplate layout={layout} debug={debug}>
    {layout === 'splitted' && (
      <S.AuthModuleTemplateBackground css={{ background: `url(${backgroundUrl}) no-repeat` }} />
    )}
    <S.AuthModuleTemplateContent>{children}</S.AuthModuleTemplateContent>
  </S.AuthModuleTemplate>
);

export default AuthModuleTemplate;
