import { useState, useEffect } from 'react';
import { err } from 'react-native-svg/lib/typescript/xml';

const useApi = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  AbortController;
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error('Url is not responding');
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useApi;
