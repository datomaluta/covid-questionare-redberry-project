import { FormWrapper, TextInput } from 'components';

const IdentificationPage = () => {
  return (
    <FormWrapper>
      <form>
        <TextInput label='სახელი*' placeholder='იოსებ' />
        <TextInput label='გვარი*' placeholder='ჯუღაშვილი' />
        <TextInput label='მეილი*' placeholder='fbi@redberry.ge' />

        <p className='font-HelveticaNeueThin border-light-black mt-28'>
          <span className='h-[0.05rem] mb-5 w-60 bg-black block'></span>
          *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
        </p>
      </form>
    </FormWrapper>
  );
};

export default IdentificationPage;
