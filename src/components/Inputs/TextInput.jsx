import { useFormContext, useWatch } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useContext, useEffect } from 'react';
import FormContext from 'context/FormData';

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
    <div className='mb-12'>
      <label className='font-HelveticaNeueBold text-[1.375rem] mb-2 block'>
        {props.label}
      </label>
      <input
        {...form.register(props.name, props.rules)}
        type='text'
        className='font-HelveticaNeueBold text-lg block border-[0.05rem] border-light-black px-5 py-[0.625rem]
      bg-transparent placeholder-light-black placeholder:font-HelveticaNeueThin w-[32.063rem]'
        placeholder={props.placeholder}
      />
      <p className='font-HelveticaNeueThin text-error-color mt-2 ml-4 h-1'>
        <ErrorMessage errors={form.formState.errors} name={props.name} />
      </p>
    </div>
  );
};

export default TextInput;
