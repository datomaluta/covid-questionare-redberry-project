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

  const {
    first_name,
    last_name,
    email,
    had_covid,
    antibodies_test,
    covid_sickness_date,
    antibodies_test_date,
    antibodies_number,
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
    non_formal_meetings,
    number_of_days_from_office,
    what_about_meetings_in_live,
    tell_us_your_opinion_about_us,
  } = formCtx.formValues;

  const toSendData = {
    first_name,
    last_name,
    email,
    had_covid,
    ...(antibodies_test === 'no' && { covid_sickness_date }),
    ...(had_covid === 'yes' && {
      had_antibody_test: antibodies_test === 'yes' ? true : false,
    }),
    ...(antibodies_test === 'yes' && {
      antibodies: {
        test_date: antibodies_test_date,
        number: +antibodies_number,
      },
    }),
    had_vaccine: had_vaccine === 'yes' ? true : false,
    ...(had_vaccine === 'yes' && { vaccination_stage }),
    ...(had_vaccine === 'no' && { i_am_waiting }),
    non_formal_meetings,
    number_of_days_from_office: +number_of_days_from_office,
    what_about_meetings_in_live,
    tell_us_your_opinion_about_us,
  };

  const onSubmit = async () => {
    try {
      setError(false);
      const response = await fetch('https://covid19.devtest.ge/api/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toSendData),
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
