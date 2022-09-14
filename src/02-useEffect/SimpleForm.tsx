import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  const handleInputChange = ({ target }: any) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        placeholder="Your name"
        onChange={handleInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="nato@gourmet.com"
        name="email"
        onChange={handleInputChange}
      />

      { name === "nato" && <Message /> }

    </>
  );
};
