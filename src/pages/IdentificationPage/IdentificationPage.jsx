import { FormWrapper, NextArrow, TextInput } from 'components';
import { IdentificationImg, IdentificationBlockImg } from 'assets';
import { Link } from 'react-router-dom';

const IdentificationPage = () => {
  return (
    <FormWrapper page='1'>
      <form className='mt-10 mr-36'>
        <TextInput label='სახელი*' placeholder='იოსებ' />
        <TextInput label='გვარი*' placeholder='ჯუღაშვილი' />
        <TextInput label='მეილი*' placeholder='fbi@redberry.ge' />

        <p className='font-HelveticaNeueThin text-very-light-gray mt-28'>
          <span className='h-[0.05rem] mb-5 w-60 bg-black block'></span>
          *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
        </p>
        <Link to='/covid-questions'>go</Link>
      </form>
      <div className='relative w-full'>
        <img
          src={IdentificationImg}
          alt='identification img with two person'
          className='absolute -top-[2.5rem] left-0 z-20'
        />
        <img
          src={IdentificationBlockImg}
          alt='transitional block'
          className='absolute z-10 -translate-x-1/2 animate-identificationAnimation'
        />
      </div>

      <button className='absolute bottom-28 left-[55%] -translate-x-1/2'>
        <NextArrow />
      </button>
    </FormWrapper>
  );
};

export default IdentificationPage;
