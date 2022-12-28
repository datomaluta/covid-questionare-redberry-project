import FormContext from 'context/FormData';
import { useContext, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const RadioInput = (props) => {
  const formCtx = useContext(FormContext);
  const form = useFormContext();

  const inputData = useWatch({
    name: props.name,
    control: form.control,
  });

  useEffect(() => {
    if (inputData) {
      formCtx.dispatch({ type: props.name, value: inputData });
    }
  }, [inputData, props.name]);

  return (
    <div className='flex items-center gap-5 mt-4 ml-4'>
      <input
        {...form.register(props.name, props.rules)}
        name={props.name}
        className='hidden'
        type='radio'
        id={props.id}
        value={props.value}
      />
      <label
        htmlFor={props.id}
        className='w-[1.438rem] h-[1.438rem] border border-light-black   rounded-full flex items-center justify-center cursor-pointer'
      >
        <span className='w-[1.063rem] h-[1.063rem] inline-block rounded-full '></span>
      </label>
      <label
        className='text-xl cursor-pointer font-HelveticaNeueThin flex items-center'
        htmlFor={props.id}
      >
        {props.answer}
      </label>
    </div>
  );
};

export default RadioInput;
