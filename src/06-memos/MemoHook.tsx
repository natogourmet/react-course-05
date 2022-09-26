import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

const heavyStuff = (iterations: number) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Here we go...');
  }

  return `${iterations} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(10000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter: <Small count={counter} />
      </h1>
      <hr />

      <h2>{ memorizedValue }</h2>

      <button
        className="btn btn-primary"
        onClick={() => {
          increment(1);
        }}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary m-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
