/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { toast } from 'react-toastify';
import { createHashHistory } from 'history';
import { USER_TOKENS } from 'utils/localstorage';

// TODO: Conect with Auth Context

/**
 * Private API Instance from Axios
 *
 */
export const privateApi = axios.create({
  baseURL: `${process.env.APP_AUTH_API_URL}`,
});

/**
 * Private API request interceptor
 * Deal with tranformation on the request
 */
privateApi.interceptors.request.use(config => {
  // Use auth context
  const { token } = JSON.parse(localStorage.getItem(USER_TOKENS)!);
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

/**
 * Private API response interceptor
 * Deal with tranformation on the response
 */
privateApi.interceptors.response.use(
  response => response,
  err =>
    new Promise((resolve, reject) => {
      const originalReq = err.config;
      const history = createHashHistory();

      const { refreshToken } = JSON.parse(localStorage.getItem(USER_TOKENS)!);

      if (
        err.response.status === 401 &&
        err.response.message !== 'Usuário não possui permissão.' &&
        err.config &&
        !err.config.__isRetryRequest
      ) {
        originalReq._retry = true;

        const url = `https://${process.env.APP_AUTH_API_URL}/token?key=${process.env.APP_AUTH_API_KEY}`;

        const req = fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
          }),
        })
          .then(response => response.json())
          .then(response => {
            const userTokens = {
              token: response.id_token,
              refreshToken: response.refresh_token,
            };

            localStorage.setItem(USER_TOKENS, JSON.stringify(userTokens));

            originalReq.headers.Authorization = `Bearer ${response.id_token}`;

            return axios(originalReq);
          })
          .catch(() => {
            localStorage.removeItem(USER_TOKENS);
            toast.error('🔒 Faça login novamente!');
            history.push('/auth');
          });

        resolve(req);
      }

      return reject(err);
    })
);

/**
 * Public API
 */
export const publicApi = axios.create({
  baseURL: `${process.env.APP_AUTH_API_URL}/public`,
});

publicApi.interceptors.request.use(config => {
  // update context here..
  const headers = { ...config.headers };
  return { ...config, headers };
});

/**
 * Integration API
 *
 */
export const integrationApi = axios.create({
  baseURL: `${process.env.APP_API_INTEGRATIONS_URL}/api/v1`,
});
