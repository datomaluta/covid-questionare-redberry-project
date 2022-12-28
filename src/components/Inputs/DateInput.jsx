import { ErrorMessage } from '@hookform/error-message';
import { useInput } from './useInput';

const TextInput = (props) => {
  const { form } = useInput(props);

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
