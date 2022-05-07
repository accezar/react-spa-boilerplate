import axios, { AxiosResponse } from 'axios';

export async function getWelcomeText(): Promise<AxiosResponse> {
  const url = `https://run.mocky.io/v3/8b122a9f-d843-4857-8770-7552cf99dfa3`;

  try {
    const res = await axios(url);
    const { data } = res;
    return data;
  } catch (error) {
    // check if the error was thrown from axios
    if (axios.isAxiosError(error)) {
      // do something
      // or just re-throw the error
      throw error;
    } else {
      // do something else
      // or creating a new error
      throw new Error('different error than axios');
    }
  }
}

export default getWelcomeText;
