/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { getWelcomeText } from '../services/mockyio/getWelcomeText';

export type WelcomePageData = {
  data: {
    text: string;
  };
  isLoading: boolean;
  isError: boolean;
};

/**
 * Estado da pagina welcome
 *
 * @returns
 */
const useWelcomePageContent = (): any => {
  const [data, setData] = useState<WelcomePageData>();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await getWelcomeText();

        setData(response.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return [data, isLoading, isError] as const;
};

export default useWelcomePageContent;
