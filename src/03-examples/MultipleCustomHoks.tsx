import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHoks = () => {
  const fetch = useFetch('https://www.breakingbadapi.com/api/quotes/1');

  console.log(fetch);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
    </>
  );
};
