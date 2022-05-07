import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { publicApi } from '../api';

interface ResetUserPasswordRequest {
  password: string;
  token: string;
}

export async function resetUserPassword({
  password,
  token,
}: ResetUserPasswordRequest): Promise<AxiosResponse> {
  try {
    const url = `${process.env.APP_AUTH_API_URL}/${token}`;

    return await publicApi.put(url, {
      password,
    });
  } catch (error: any) {
    if (error.response.status === 400) {
      toast.error('❕ Token inválido!');
    }
    toast.error('🙁 Ocorreu um erro inesperado!');

    throw new Error(error.response.statusText);
  }
}

export default resetUserPassword;
