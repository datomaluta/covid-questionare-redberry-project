import React, { useMemo, useReducer } from 'react';

const FormContext = React.createContext({
  first_name: '',
  last_name: '',
  email: '',
  dispatch: (data) => {},
});

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
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
