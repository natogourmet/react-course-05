import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hook</h1>
      <hr />
      <h2>{counter}</h2>
      
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
    </>
  );
};
