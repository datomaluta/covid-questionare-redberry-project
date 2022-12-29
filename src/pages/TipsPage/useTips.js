import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { FormContext } from 'context';
import { localStorageCleaner } from 'helpers';

export const useTips = () => {
  const [error, setError] = useState(false);
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

  const onSubmit = async () => {
    try {
      setError(false);
      const response = await fetch('https://covid19.devtest.ge/api/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formCtx.formValues.first_name,
          last_name: formCtx.formValues.last_name,
          email: formCtx.formValues.email,
          had_covid: formCtx.formValues.had_covid,
          ...(formCtx.formValues.antibodies_test === 'no' && {
            covid_sickness_date: formCtx.formValues.covid_sickness_date,
          }),
          had_antibody_test:
            formCtx.formValues.antibodies_test === 'yes' ? true : false,
          ...(formCtx.formValues.antibodies_test === 'yes' && {
            antibodies: {
              test_date: formCtx.formValues.antibodies_test_date,
              number: +formCtx.formValues.antibodies_number,
            },
          }),
          had_vaccine: formCtx.formValues.had_vaccine === 'yes' ? true : false,
          vaccination_stage: formCtx.formValues.vaccination_stage,
          ...(formCtx.formValues.had_vaccine === 'no' && {
            i_am_waiting: formCtx.formValues.i_am_waiting,
          }),
          non_formal_meetings: formCtx.formValues.non_formal_meetings,
          number_of_days_from_office:
            +formCtx.formValues.number_of_days_from_office,
          what_about_meetings_in_live:
            formCtx.formValues.what_about_meetings_in_live,
          tell_us_your_opinion_about_us:
            formCtx.formValues.tell_us_your_opinion_about_us,
        }),
      });

      if (response.status !== 201) {
        throw new Error('Something went wrong');
      }

      navigate('/thanks');
      localStorageCleaner();
    } catch (error) {
      setError(true);
    }
  };

  return { form, onSubmit, formCtx, error };
};
