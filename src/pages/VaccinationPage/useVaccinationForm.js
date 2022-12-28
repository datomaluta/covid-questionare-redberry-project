import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from 'context';

export const useVaccinationForm = () => {
  const navigate = useNavigate();
  const formCtx = useContext(FormContext);
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      had_vaccine: localStorage.getItem('had_vaccine') || '',
      vaccination_stage: localStorage.getItem('vaccination_stage') || '',
      i_am_waiting: localStorage.getItem('i_am_waiting') || '',
    },
  });

  const onSubmit = () => {
    navigate('/tips');
  };

  return { form, onSubmit, formCtx };
};
