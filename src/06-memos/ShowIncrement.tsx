import { memo } from 'react';

interface Props {
  increment: (value: number) => void;
}

export const ShowIncrement = memo(({ increment }: Props) => {
  console.log('being redereed');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});
