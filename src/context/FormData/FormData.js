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
