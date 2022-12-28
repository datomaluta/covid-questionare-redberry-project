import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from 'context';

export const useCovidQuestionsForm = () => {
  const navigate = useNavigate();
  const formCtx = useContext(FormContext);
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      had_covid: localStorage.getItem('had_covid') || '',
      antibodies_test: localStorage.getItem('antibodies_test') || '',
      antibodies_test_date: localStorage.getItem('antibodies_test_date') || '',
      antibodies_number: localStorage.getItem('antibodies_number') || '',
      covid_sickness_date: localStorage.getItem('covid_sickness_date') || '',
    },
  });
  const onSubmit = (data) => {
    navigate('/vaccination');
  };

  return { form, onSubmit, formCtx };
};
