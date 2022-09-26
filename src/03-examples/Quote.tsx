import { useLayoutEffect, useRef, useState } from 'react';

interface QuoteProps {
  quote: string;
  author: string;
}

export const Quote = ({ quote, author }: QuoteProps) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current?.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-0">
          {quote}
        </p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
    </>
  );
};
