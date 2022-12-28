import { useFormContext, useWatch } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import FormContext from 'context/FormData';
import { ErrorMessage } from '@hookform/error-message';

const TextInput = (props) => {
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

  return (
    <div className='mt-8'>
      <input
        placeholder={props.placeholder}
        {...form.register(props.name, props.rules)}
        className='w-[32.063rem] px-5 py-3 bg-transparent border border-light-black block mb-6 font-HelveticaNeueThin placeholder-light-black'
        type='date'
      />
      <p className='font-HelveticaNeueThin text-error-color mt-1 ml-4 h-1'>
        <ErrorMessage errors={form.formState.errors} name={props.name} />
      </p>
    </div>
  );
};

export default TextInput;
