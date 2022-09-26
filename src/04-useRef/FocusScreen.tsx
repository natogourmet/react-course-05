import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type="text"
        placeholder="Input your name"
        className="form-control"
      />

      <input
        type="text"
        placeholder="Input your name"
        className="form-control"
      />

      <input
        ref={inputRef}
        type="text"
        placeholder="Input your name"
        className="form-control"
      />

      <input
        type="text"
        placeholder="Input your name"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={()=>{console.log(inputRef)}}>Focus</button>
    </>
  );
};
