import { FormContext } from 'context';
import { useContext, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export const useInput = (props) => {
  const formCtx = useContext(FormContext);
  const form = useFormContext();

  const inputData = useWatch({
    name: props.name,
    control: form.control,
  });

  useEffect(() => {
    if (inputData) {
      formCtx.dispatch({ type: props.name, value: inputData });
    } else {
      formCtx.dispatch({ type: props.name, value: '' });
    }
  }, [inputData, props.name]);

  return { form };
};
