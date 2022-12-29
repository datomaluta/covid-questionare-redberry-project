import React, { useMemo, useReducer } from 'react';

const FormContext = React.createContext({
  first_name: '',
  last_name: '',
  email: '',
  had_covid: '',
  covid_sickness_date: '',
  antibodies_test: '',
  antibodies_test_date: '',
  antibodies_number: '',
  had_vaccine: '',
  vaccination_stage: '',
  i_am_waiting: '',
  non_formal_meetings: '',
  number_of_days_from_office: '',
  what_about_meetings_in_live: '',
  tell_us_your_opinion_about_us: '',
  dispatch: (data) => {},
});

const initialForm = {
  first_name: localStorage.getItem('first_name') || '',
  last_name: localStorage.getItem('last_name') || '',
  email: localStorage.getItem('email') || '',
  had_covid: localStorage.getItem('had_covid') || '',
  covid_sickness_date: localStorage.getItem('covid_sickness_date') || '',
  antibodies_test: localStorage.getItem('antibodies_test') || '',
  antibodies_test_date: localStorage.getItem('antibodies_test_date') || '',
  antibodies_number: localStorage.getItem('antibodies_number') || '',
  had_vaccine: localStorage.getItem('had_vaccine') || '',
  vaccination_stage: localStorage.getItem('vaccination_stage') || '',
  i_am_waiting: localStorage.getItem('i_am_waiting') || '',
  non_formal_meetings: localStorage.getItem('non_formal_meetings') || '',
  number_of_days_from_office:
    localStorage.getItem('number_of_days_from_office') || '',
  what_about_meetings_in_live:
    localStorage.getItem('what_about_meetings_in_live') || '',
  tell_us_your_opinion_about_us:
    localStorage.getItem('tell_us_your_opinion_about_us') || '',
};

const formReducer = (state, action) => {
  localStorage.setItem(action.type, action.value);
  if (action.type === 'first_name') {
    return { ...state, first_name: action.value };
  }
  if (action.type === 'last_name') {
    return { ...state, last_name: action.value };
  }
  if (action.type === 'email') {
    return { ...state, email: action.value };
  }
  if (action.type === 'had_covid') {
    return { ...state, had_covid: action.value };
  }
  if (action.type === 'antibodies_test') {
    return {
      ...state,
      antibodies_test: action.value,
    };
  }
  if (action.type === 'antibodies_test_date') {
    return { ...state, antibodies_test_date: action.value };
  }
  if (action.type === 'antibodies_number') {
    return { ...state, antibodies_number: action.value };
  }
  if (action.type === 'covid_sickness_date') {
    return { ...state, covid_sickness_date: action.value };
  }
  if (action.type === 'had_vaccine') {
    return { ...state, had_vaccine: action.value };
  }
  if (action.type === 'vaccination_stage') {
    return { ...state, vaccination_stage: action.value };
  }
  if (action.type === 'i_am_waiting') {
    return { ...state, i_am_waiting: action.value };
  }
  if (action.type === 'non_formal_meetings') {
    return { ...state, non_formal_meetings: action.value };
  }
  if (action.type === 'number_of_days_from_office') {
    return { ...state, number_of_days_from_office: action.value };
  }
  if (action.type === 'what_about_meetings_in_live') {
    return { ...state, what_about_meetings_in_live: action.value };
  }
  if (action.type === 'tell_us_your_opinion_about_us') {
    return { ...state, tell_us_your_opinion_about_us: action.value };
  }
  return state;
};

export const FormDataProvider = (props) => {
  const [formValues, dispatch] = useReducer(formReducer, initialForm);

  const contextValue = useMemo(
    () => ({
      dispatch,
      formValues,
    }),
    [dispatch, formValues]
  );

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
