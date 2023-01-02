import { useInput } from './useInput';

const TextArea = (props) => {
  const { form } = useInput(props);

  return (
    <textarea
      {...form.register(props.name)}
      className='bg-transparent border border-light-black w-[38.875rem] h-[11.5rem] font-HelveticaNeueThin px-2 py-2 resize-none'
    ></textarea>
  );
};

export default TextArea;
