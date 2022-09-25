import { useState } from 'react';

interface Props {
  name: string,
  email: string,
  password: string,
}

export const useForm = (initialForm: Props) => {
  const [formState, setFormState] = useState(initialForm);

  const { name, email, password } = formState;

  const handleInputChange = ({ target }: any) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleResetForm = () => {
    setFormState(initialForm);
  };


  return {
    ...formState,
    formState,
    handleInputChange,
    handleResetForm,
  };
};
