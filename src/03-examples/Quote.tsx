import React from 'react';

interface QuoteProps {
  quote: string;
  author: string;
}

export const Quote = ({ quote, author }: QuoteProps) => {
  return (
    <>
      <blockquote className="blockquote text-end">
        <p className="mb-0">{quote}</p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>
    </>
  );
};
