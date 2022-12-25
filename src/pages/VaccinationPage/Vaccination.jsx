import { DoctorImg, DoctorStarImg } from 'assets';
import { FormWrapper, NextArrow, PrevArrow, RadioInput } from 'components';
import { ChooseVaccinationLevel } from './components';

const Vaccination = () => {
  return (
    <FormWrapper page='3'>
      <form className='mt-10'>
        <div>
          <p className='font-HelveticaNeueBold text-[1.375rem]'>
            უკვე აცრილი ხარ?*
          </p>
          <RadioInput
            id='vaccination_yes'
            value='vaccination_yes'
            name='vaccination'
            answer='კი'
          />
          <RadioInput
            id='vaccination_no'
            value='vaccination_no'
            name='vaccination'
            answer='არა'
          />
        </div>
        <ChooseVaccinationLevel />
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

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-28'>
        <button>
          <PrevArrow />
        </button>
        <button>
          <NextArrow />
        </button>
      </div>
    </FormWrapper>
  );
};

export default Vaccination;
