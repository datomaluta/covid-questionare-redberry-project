import { CovidQuestionsCircleImg, CovidQuestionsImg } from 'assets';
import { FormWrapper, NextArrow, PrevArrow, RadioInput } from 'components';

const CovidQuestions = () => {
  return (
    <FormWrapper page='2'>
      <form className='mt-10 w-[37.25rem]'>
        <div>
          <p className='font-HelveticaNeueBold text-[1.375rem]'>
            გაქვს გადატანილი Covid-19?*
          </p>
          <RadioInput
            id='covid_yes'
            value='covid_yes'
            name='has_covid'
            answer='კი'
          />
          <RadioInput
            id='covid_no'
            value='covid_no'
            name='has_covid'
            answer='არა'
          />
          <RadioInput
            id='covid_current'
            value='covid_current'
            name='has_covid'
            answer='ახლა მაქვს'
          />
        </div>

        <div className='mt-12'>
          <p className='font-HelveticaNeueBold text-[1.375rem]'>
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </p>
          <RadioInput
            id='antibodies_yes'
            value='antibodies_yes'
            name='has_antibodies'
            answer='კი'
          />
          <RadioInput
            id='antibodies_no'
            value='antibodies_no'
            name='has_antibodies'
            answer='არა'
          />
        </div>
        <div className='mt-12'>
          <p className='font-HelveticaNeueBold text-[1.375rem]'>
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br /> რიცხვი და
            ანტისხეულების რაოდენობა*
          </p>
          <div className='mt-8 ml-4'>
            <input
              className='w-[32.063rem] px-5 py-3 bg-transparent border border-light-black block mb-6'
              type='date'
            />
            <input
              placeholder='ანტისხეულების რაოდენობა'
              className='w-[32.063rem] px-5 py-3 bg-transparent border border-light-black block font-HelveticaNeueThin text-lg placeholder-light-black'
              type='text'
            />
          </div>
        </div>
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

export default CovidQuestions;
