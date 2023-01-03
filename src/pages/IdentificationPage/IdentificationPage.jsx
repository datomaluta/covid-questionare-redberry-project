import { FormWrapper, NextArrow, TextInput } from 'components';
import { IdentificationImg, IdentificationBlockImg } from 'assets';
import { FormProvider } from 'react-hook-form';
import { useIdentificationForm } from './useIdentificationForm';

const IdentificationPage = () => {
  const { form, onSubmit } = useIdentificationForm();

  return (
    <FormProvider {...form}>
      <FormWrapper page='1'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-10 mr-36'>
          <TextInput
            label='სახელი*'
            placeholder='იოსებ'
            name={'first_name'}
            rules={{
              required: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              pattern: {
                value: /^[A-Za-zა-ჰ]+$/,
                message: 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
              },
              minLength: {
                value: 3,
                message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              },
              maxLength: {
                value: 255,
                message:
                  'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
              },
            }}
          />
          <TextInput
            label='გვარი*'
            placeholder='ჯუღაშვილი'
            name={'last_name'}
            rules={{
              required: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              minLength: {
                value: 3,
                message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              },
              maxLength: {
                value: 255,
                message: 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
              },
              pattern: {
                value: /^[A-Za-zა-ჰ]+$/,
                message: 'გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
              },
            }}
          />
          <TextInput
            label='მეილი*'
            placeholder='fbi@redberry.ge'
            name={'email'}
            rules={{
              required: 'მეილის ველი აუცილებელია',
              pattern: {
                value: /([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@redberry([.])ge$/,
                message:
                  'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
              },
            }}
          />
          <p className='font-HelveticaNeueThin text-very-light-gray mt-28'>
            <span className='h-[0.05rem] mb-5 w-60 bg-black block'></span>
            *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
          </p>
          <button className='absolute z-40 bottom-8 left-[53%] -translate-x-1/2'>
            <NextArrow
              color={form.formState.isValid ? '#232323' : '#8D8D8D'}
              cursor={form.formState.isValid ? 'pointer' : 'auto'}
            />
          </button>
        </form>
        <div className='relative w-full'>
          <img
            src={IdentificationImg}
            alt='identification img with two person'
            className='absolute -top-10 left-0 z-20'
          />
          <img
            src={IdentificationBlockImg}
            alt='transitional block'
            className='absolute z-10 -translate-x-1/2 animate-identificationAnimation'
          />
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default IdentificationPage;
