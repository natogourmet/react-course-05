import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
  const { formState, handleInputChange, handleResetForm, name, email, password } = useForm({
    name: 'Nato',
    email: 'nato@gourmet.com',
    password: '123456',
  });

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
        value={name}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="nato@gourmet.com"
        name="email"
        onChange={handleInputChange}
        value={email}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        onChange={handleInputChange}
        value={password}
      />

      <button onClick={handleResetForm} className="btn btn-primary mt-2">Restart</button>
    </>
  );
};
