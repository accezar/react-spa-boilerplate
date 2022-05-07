/* eslint-disable no-console */
import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

import { useParams, useNavigate } from 'react-router-dom';

import Text from '@cavilha/text';
import Box from '@cavilha/box';

import ResetPasswordForm from '../components/ResetPasswordForm';

/**
 * First Access Page
 *
 * @returns
 */
const FirstAccessPage = (): JSX.Element => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Primeiro Acesso</title>
    </Helmet>

    <Box css={{ mb: 12 }}>
      <Text as="h4">Criar senha</Text>
    </Box>

    <>
      <Text as="span">
        Seja bem vindo! Este é seu primeiro acesso e para isso é necessário criar uma senha de
        acesso:
      </Text>

      <ResetPasswordForm />
    </>
  </>
);

export default FirstAccessPage;
