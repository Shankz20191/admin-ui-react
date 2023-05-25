import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;

        setApiData(data);
      } catch (error) {
        setServerError(error);
      }
    };

    fetchData();
  }, [url]);

  return [apiData, serverError];
};

export default useFetch;
