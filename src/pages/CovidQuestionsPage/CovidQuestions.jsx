import { CovidQuestionsCircleImg, CovidQuestionsImg } from 'assets';
import { ErrorMessage } from '@hookform/error-message';

import {
  DateInput,
  FormWrapper,
  NextArrow,
  PrevArrow,
  RadioInput,
  TextInput,
} from 'components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useContext } from 'react';
import FormContext from 'context/FormData';
const CovidQuestions = () => {
  const navigate = useNavigate();
  const formCtx = useContext(FormContext);

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      had_covid: localStorage.getItem('had_covid') || '',
      antibodies_test: localStorage.getItem('antibodies_test') || '',
      antibodies_test_date: localStorage.getItem('antibodies_test_date') || '',
      antibodies_number: localStorage.getItem('antibodies_number') || '',
      covid_sickness_date: localStorage.getItem('covid_sickness_date') || '',
    },
  });
  const onSubmit = (data) => {
    navigate('/vaccination');
  };

  return (
    <FormProvider {...form}>
      <FormWrapper page='2'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-10 w-[37.25rem]'
        >
          <div>
            <p className='font-HelveticaNeueBold text-[1.375rem]'>
              გაქვს გადატანილი Covid-19?*
            </p>
            <RadioInput
              id='covid_yes'
              value='yes'
              name='had_covid'
              answer='კი'
              rules={{ required: 'ამ ველის შევსება აუცილებელია' }}
            />
            <RadioInput
              id='covid_no'
              value='no'
              name='had_covid'
              answer='არა'
            />
            <RadioInput
              id='covid_current'
              value='have_right_now'
              name='had_covid'
              answer='ახლა მაქვს'
            />
            <p className='font-HelveticaNeueThin text-error-color mt-4 ml-4 h-1'>
              <ErrorMessage errors={form.formState.errors} name={'had_covid'} />
            </p>
          </div>

          {formCtx.formValues.had_covid === 'yes' && (
            <div className='mt-12'>
              <p className='font-HelveticaNeueBold text-[1.375rem]'>
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </p>
              <RadioInput
                id='antibodies_yes'
                value='yes'
                name='antibodies_test'
                answer='კი'
                rules={{ required: 'ამ ველის შევსება აუცილებელია' }}
              />
              <RadioInput
                id='antibodies_no'
                value='no'
                name='antibodies_test'
                answer='არა'
              />
              <p className='font-HelveticaNeueThin text-error-color mt-4 ml-4 h-1'>
                <ErrorMessage
                  errors={form.formState.errors}
                  name={'antibodies_test'}
                />
              </p>
            </div>
          )}

          {formCtx.formValues.antibodies_test === 'yes' &&
            formCtx.formValues.had_covid === 'yes' && (
              <div className='mt-12'>
                <p className='font-HelveticaNeueBold text-[1.375rem]'>
                  თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br /> რიცხვი და
                  ანტისხეულების რაოდენობა*
                </p>
                <div className='mt-8 ml-4'>
                  <DateInput name='antibodies_test_date' placeholder='რიცხვი' />
                  <TextInput
                    name='antibodies_number'
                    placeholder='ანტისხეულების რაოდენობა'
                    rules={{
                      pattern: {
                        value: /^[0-9]*$/,
                        message: 'დასაშვებია მხოლოდ ციფრები',
                      },
                    }}
                  />
                </div>
              </div>
            )}
          {formCtx.formValues.antibodies_test === 'no' && (
            <div className='mt-12'>
              <p className='font-HelveticaNeueBold text-[1.375rem]'>
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                Covid-19*
              </p>
              <div className='ml-4'>
                <DateInput
                  name='covid_sickness_date'
                  placeholder='დდ/თთ/წწ'
                  rules={{
                    required: 'ეს ველი აუცილებელია',
                  }}
                />
              </div>
            </div>
          )}
          <button
            disabled={!form.formState.isValid}
            className='absolute bottom-8 left-[53%] z-40 -translate-x-1/2'
          >
            <NextArrow />
          </button>
        </form>
        <div className='relative flex-grow'>
          <img
            src={CovidQuestionsImg}
            alt='boy with temperature'
            className='absolute -top-[1rem] left-12 z-20'
          />
          <img
            src={CovidQuestionsCircleImg}
            alt='temperature red circle'
            className='absolute top-[16rem] left-[8rem] z-10 animate-covidQuestionsAnimation'
          />
        </div>
        <Link
          to='/identification'
          className='absolute z-40 bottom-8 left-[47%] -translate-x-1/2'
        >
          <PrevArrow />
        </Link>
      </FormWrapper>
    </FormProvider>
  );
};

export default CovidQuestions;
