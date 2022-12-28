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
  non_formal_meetings: '',
  number_of_days_from_office: '',
  what_about_meetings_in_live: '',
  tell_us_your_opinion_about_us: '',
  dispatch: (data) => {},
});

const initialForm = {
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
  non_formal_meetings: '',
  number_of_days_from_office: '',
  what_about_meetings_in_live: '',
  tell_us_your_opinion_about_us: '',
};

const formReducer = (state, action) => {
  if (action.type === 'first_name') {
    localStorage.setItem('first_name', action.value);
    return { ...state, first_name: action.value };
  }
  if (action.type === 'last_name') {
    localStorage.setItem('last_name', action.value);
    return { ...state, last_name: action.value };
  }
  if (action.type === 'email') {
    localStorage.setItem('email', action.value);
    return { ...state, email: action.value };
  }
  if (action.type === 'had_covid') {
    localStorage.setItem('had_covid', action.value);
    return { ...state, had_covid: action.value };
  }
  if (action.type === 'antibodies_test') {
    localStorage.setItem('antibodies_test', action.value);
    return { ...state, antibodies_test: action.value };
  }
  if (action.type === 'antibodies_test_date') {
    localStorage.setItem('antibodies_test_date', action.value);
    return { ...state, antibodies_test_date: action.value };
  }
  if (action.type === 'antibodies_number') {
    localStorage.setItem('antibodies_number', action.value);
    return { ...state, antibodies_number: action.value };
  }
  if (action.type === 'covid_sickness_date') {
    localStorage.setItem('covid_sickness_date', action.value);
    return { ...state, covid_sickness_date: action.value };
  }
  if (action.type === 'had_vaccine') {
    localStorage.setItem('had_vaccine', action.value);
    return { ...state, had_vaccine: action.value };
  }
  if (action.type === 'vaccination_stage') {
    localStorage.setItem('vaccination_stage', action.value);
    return { ...state, vaccination_stage: action.value };
  }
  if (action.type === 'i_am_waiting') {
    localStorage.setItem('i_am_waiting', action.value);
    return { ...state, i_am_waiting: action.value };
  }
  if (action.type === 'non_formal_meetings') {
    localStorage.setItem('non_formal_meetings', action.value);
    return { ...state, non_formal_meetings: action.value };
  }
  if (action.type === 'number_of_days_from_office') {
    localStorage.setItem('number_of_days_from_office', action.value);
    return { ...state, number_of_days_from_office: action.value };
  }
  if (action.type === 'what_about_meetings_in_live') {
    localStorage.setItem('what_about_meetings_in_live', action.value);
    return { ...state, what_about_meetings_in_live: action.value };
  }
  if (action.type === 'tell_us_your_opinion_about_us') {
    localStorage.setItem('tell_us_your_opinion_about_us', action.value);
    return { ...state, tell_us_your_opinion_about_us: action.value };
  }
  return { ...state };
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
