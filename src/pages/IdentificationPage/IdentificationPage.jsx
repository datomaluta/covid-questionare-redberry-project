import { FormWrapper, NextArrow, TextInput } from 'components';
import { IdentificationImg, IdentificationBlockImg } from 'assets';

const IdentificationPage = () => {
  return (
    <FormWrapper>
      <form>
        <TextInput label='სახელი*' placeholder='იოსებ' />
        <TextInput label='გვარი*' placeholder='ჯუღაშვილი' />
        <TextInput label='მეილი*' placeholder='fbi@redberry.ge' />

        <p className='font-HelveticaNeueThin text-very-light-gray mt-28'>
          <span className='h-[0.05rem] mb-5 w-60 bg-black block'></span>
          *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
        </p>
      </form>
      <div className='relative h-[51.938rem] w-full'>
        <img
          src={IdentificationImg}
          alt='idimg'
          className='absolute -top-[5.5rem] left-0 z-20'
        />
        <img
          src={IdentificationBlockImg}
          alt='idblock'
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
