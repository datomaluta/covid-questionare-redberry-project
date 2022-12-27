import React, { useMemo, useReducer } from 'react';

const FormContext = React.createContext({
  firstName: '',
  lastName: '',
  email: '',
  dispatch: (data) => {},
});

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
};

const formReducer = (state, action) => {
  if (action.type === 'firstName') {
    console.log('asd');
    localStorage.setItem('firstName', action.value);
    return { ...state, firstName: action.value };
  }
  if (action.type === 'lastName') {
    localStorage.setItem('lastName', action.value);
    return { ...state, lastName: action.value };
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
