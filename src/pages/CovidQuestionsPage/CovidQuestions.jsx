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
import { Link } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';
import { useCovidQuestionsForm } from './useCovidQuestionsForm';

const CovidQuestions = () => {
  const { form, onSubmit, formCtx } = useCovidQuestionsForm();

  return (
    <FormProvider {...form}>
      <FormWrapper page='2'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-10 w-[37.25rem]'
        >
          <div>
            <p className='font-HelveticaNeueBold text-[1.375rem] text-light-black'>
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
              <p className='font-HelveticaNeueBold text-[1.375rem] text-light-black'>
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
                <p className='font-HelveticaNeueBold text-[1.375rem] text-light-black'>
                  თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br /> რიცხვი და
                  ანტისხეულების რაოდენობა
                </p>
                <div className='mt-8 ml-4'>
                  <DateInput name='antibodies_test_date' placeholder='რიცხვი' />
                  <TextInput
                    name='antibodies_number'
                    placeholder='ანტისხეულების რაოდენობა'
                    rules={{
                      pattern: {
                        value: /^[1-9]*$/,
                        message: 'შეიყვანეთ ვალიდური მნიშვნელობა',
                      },
                    }}
                  />
                </div>
              </div>
            )}
          {formCtx.formValues.antibodies_test === 'no' &&
            formCtx.formValues.had_covid === 'yes' && (
              <div className='mt-12'>
                <p className='font-HelveticaNeueBold text-[1.375rem] text-light-black'>
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
            <NextArrow
              color={form.formState.isValid ? '#232323' : '#8D8D8D'}
              cursor={form.formState.isValid ? 'pointer' : 'auto'}
            />
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
