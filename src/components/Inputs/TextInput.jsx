const TextInput = (props) => {
  return (
    <div className='mb-12'>
      <label className='font-HelveticaNeueBold text-[1.375rem] mb-2 block'>
        {props.label}
      </label>
      <input
        type='text'
        className='font-HelveticaNeueBold text-lg block border-[0.05rem] border-light-black px-5 py-[0.625rem]
      bg-transparent placeholder-light-black placeholder:font-HelveticaNeueThin w-[32.063rem]'
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;
