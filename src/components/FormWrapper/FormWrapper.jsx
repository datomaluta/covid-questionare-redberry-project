import { TextLogo } from 'components';

const FormWrapper = (props) => {
  return (
    <div className='px-[12.5rem] pt-16 bg-light-grey h-screen'>
      <header className='border-b-[0.113rem] border-light-black pb-4 flex justify-between items-center'>
        <TextLogo />
        <div className='font-Anonymous font-bold text-[2.5rem] leading-none'>
          1/4
        </div>
      </header>

      <div className='mt-10 flex gap-36'>{props.children}</div>
    </div>
  );
};

export default FormWrapper;
