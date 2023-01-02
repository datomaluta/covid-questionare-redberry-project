import { DoctorImg, DoctorStarImg } from 'assets';
import { FormWrapper, NextArrow, PrevArrow, RadioInput } from 'components';
import {
  BookingLink,
  BookNow,
  ChooseVaccinationLevel,
  WaitingFor,
  RegistrationLink,
} from './components';
import { useVaccinationForm } from './useVaccinationForm';
import { FormProvider } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'react-router-dom';

const Vaccination = () => {
  const { form, onSubmit, formCtx } = useVaccinationForm();

  return (
    <FormProvider {...form}>
      <FormWrapper page='3'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-10 w-vaccination-form-width'
        >
          <div>
            <p className='font-HelveticaNeueBold text-[1.375rem] text-light-black'>
              უკვე აცრილი ხარ?*
            </p>
            <RadioInput
              id='vaccination_yes'
              value='yes'
              name='had_vaccine'
              answer='კი'
              rules={{ required: 'ამ ველის შევსება აუცილებელია' }}
            />
            <RadioInput
              id='vaccination_no'
              value='no'
              name='had_vaccine'
              answer='არა'
            />
            <p className='font-HelveticaNeueThin text-error-color mt-4 ml-4 h-1'>
              <ErrorMessage
                errors={form.formState.errors}
                name={'had_vaccine'}
              />
            </p>
          </div>
          {formCtx.formValues.had_vaccine === 'yes' && (
            <>
              <ChooseVaccinationLevel />
              <p className='font-HelveticaNeueThin text-error-color mt-4 ml-4 h-1'>
                <ErrorMessage
                  errors={form.formState.errors}
                  name={'vaccination_stage'}
                />
              </p>
              {formCtx.formValues.vaccination_stage ===
                'first_dosage_and_not_registered_yet' && <BookNow />}
            </>
          )}

          {formCtx.formValues.had_vaccine === 'no' && (
            <>
              <WaitingFor />
              <p className='font-HelveticaNeueThin text-error-color mt-4 ml-4 h-1'>
                <ErrorMessage
                  errors={form.formState.errors}
                  name={'vaccination_stage'}
                />
              </p>
              {formCtx.formValues.i_am_waiting === 'not_planning' && (
                <BookingLink />
              )}
              {formCtx.formValues.i_am_waiting ===
                'had_covid_and_planning_to_be_vaccinated' && (
                <RegistrationLink />
              )}
            </>
          )}
          <button
            disabled={!form.formState.isValid}
            className='absolute bottom-8 left-[53%] -translate-x-1/2 flex gap-28'
          >
            <NextArrow />
          </button>
        </form>
        <div className='mt-12 ml-16 relative flex-grow'>
          <img
            src={DoctorImg}
            alt='doctor with syringe'
            className='absolute top-0 left-0 z-20'
          />
          <img
            src={DoctorStarImg}
            alt='transitional star on doctor'
            className='absolute  z-10 animate-doctorStarAnimation'
          />
        </div>

        <Link
          to='/covid-questions'
          className='absolute bottom-8 left-[47%] -translate-x-1/2'
        >
          <PrevArrow />
        </Link>
      </FormWrapper>
    </FormProvider>
  );
};

export default Vaccination;
