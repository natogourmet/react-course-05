import { useFetch, useCounter } from '../hooks';
import { Quote, LoadingQuote } from '../03-examples';

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button
        className="btn btn-primary"
        onClick={() => {
          increment(1);
        }}
      >
        Next quote
      </button>
    </>
  );
};
