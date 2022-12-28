import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const useIdentificationForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      first_name: localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      email: localStorage.getItem('email'),
    },
  });

  const onSubmit = (data) => {
    navigate('/covid-questions');
  };

  return { form, onSubmit };
};
