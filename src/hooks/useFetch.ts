import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: false,
  });

  const getFetch = async () => {
    setState({
      ...state,
      loading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      loading: false,
      hasError: false,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    loading: state.loading,
    hasError: state.hasError,
  };
};
