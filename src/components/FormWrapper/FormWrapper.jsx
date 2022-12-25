import { TextLogo } from 'components';

const FormWrapper = (props) => {
  return (
    <div className='px-[12.5rem] pt-16 bg-light-grey min-h-screen'>
      <header className='border-b-[0.113rem] border-light-black pb-4 flex justify-between items-center'>
        <TextLogo />
        <div className='font-Anonymous font-bold text-[2.5rem] leading-none'>
          {props.page}/4
        </div>
      </header>

      <div className=' flex'>{props.children}</div>
    </div>
  );
};

export default FormWrapper;
