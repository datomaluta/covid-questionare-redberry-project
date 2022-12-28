import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from 'context';

export const useTips = () => {
  const navigate = useNavigate();
  const formCtx = useContext(FormContext);
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      non_formal_meetings: localStorage.getItem('non_formal_meetings') || '',
      number_of_days_from_office:
        localStorage.getItem('number_of_days_from_office') || '',
      i_am_waiting: localStorage.getItem('i_am_waiting') || '',
      what_about_meetings_in_live:
        localStorage.getItem('what_about_meetings_in_live') || '',
      tell_us_your_opinion_about_us:
        localStorage.getItem('tell_us_your_opinion_about_us') || '',
    },
  });

  const onSubmit = () => {
    navigate('/thanks');
  };

  return { form, onSubmit, formCtx };
};
