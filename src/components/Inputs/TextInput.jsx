import { ErrorMessage } from '@hookform/error-message';
import { useInput } from './useInput';

const TextInput = (props) => {
  const { form } = useInput(props);

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
