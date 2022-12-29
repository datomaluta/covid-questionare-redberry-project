import { BikeImg, HeartImg } from 'assets';
import { FormWrapper, PrevArrow, RadioInput, TextArea } from 'components';
import { FormProvider } from 'react-hook-form';
import { useTips } from './useTips';
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'react-router-dom';

const TipsPage = () => {
  const { form, onSubmit, error } = useTips();

  const sendData = async () => {
    const response = await fetch('https://covid19.devtest.ge/api/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: 'gela',
        last_name: 'babluani',
        email: 'gela@redberry.ge',
        had_covid: 'yes',
        had_antibody_test: true,
        antibodies: {
          test_date: '2022-04-30',
          number: 570,
        },
        had_vaccine: true,
        vaccination_stage: 'first_dosage_and_registered_on_the_second',
        non_formal_meetings: 'once_a_week',
        number_of_days_from_office: 3,
        what_about_meetings_in_live: 'I will enjoy very much',
        tell_us_your_opinion_about_us:
          "It'''s great to be here! Just... why do guys have Postman logo? 🤔",
      }),
    });
    const data = await response;
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <FormWrapper page='4'>
        <button onClick={sendData}>click me</button>
        <div className='w-[38.875rem] max-h-[50rem] mt-10 mr-36 overflow-y-scroll overflow-x-hidden scrollbar-none pb-16'>
          <div className='font-HelveticaNeueThin text-[1.375rem]'>
            <p className='mb-4'>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის.
            </p>
            <p>
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
              ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className='mt-10'>
            <div>
              <p className='font-HelveticaNeueBold text-[1.375rem]'>
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
              </p>
              <RadioInput
                id='twice_a_week'
                value='twice_a_week'
                name='non_formal_meetings'
                answer='კვირაში ორჯერ'
                rules={{ required: 'ეს ველი აუცილებელია' }}
              />
              <RadioInput
                id='once_a_week'
                value='once_a_week'
                name='non_formal_meetings'
                answer='კვირაში ერთხელ'
              />
              <RadioInput
                id='once_in_a_two_week'
                value='once_in_a_two_weeks'
                name='non_formal_meetings'
                answer='ორ კვირაში ერთხელ'
              />
              <RadioInput
                id='once_in_a_month'
                value='once_in_a_month'
                name='non_formal_meetings'
                answer='თვეში ერთხელ'
              />
              <p className='font-HelveticaNeueThin text-error-color mt-4 ml-4 h-1'>
                <ErrorMessage
                  errors={form.formState.errors}
                  name={'non_formal_meetings'}
                />
              </p>
            </div>
            <div className='mt-10'>
              <p className='font-HelveticaNeueBold text-[1.375rem]'>
                კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
              </p>
              <RadioInput
                id='0'
                value='0'
                name='number_of_days_from_office'
                answer='0'
                rules={{ required: 'ეს ველი აუცილებელია' }}
              />
              <RadioInput
                id='1'
                value='1'
                name='number_of_days_from_office'
                answer='1'
              />
              <RadioInput
                id='2'
                value='2'
                name='number_of_days_from_office'
                answer='2'
              />
              <RadioInput
                id='3'
                value='3'
                name='number_of_days_from_office'
                answer='3'
              />
              <RadioInput
                id='4'
                value='4'
                name='number_of_days_from_office'
                answer='4'
              />
              <RadioInput
                id='5'
                value='5'
                name='number_of_days_from_office'
                answer='5'
              />
              <p className='font-HelveticaNeueThin text-error-color mt-4 ml-4 h-1'>
                <ErrorMessage
                  errors={form.formState.errors}
                  name={'number_of_days_from_office'}
                />
              </p>
            </div>

            <div className='mt-10'>
              <p className='font-HelveticaNeueBold text-[1.375rem] mb-5'>
                რას ფიქრობ ფიზიკურ შეკრებებზე?
              </p>
              <TextArea name='what_about_meetings_in_live' />
            </div>

            <div className='mt-10'>
              <p className='font-HelveticaNeueBold text-[1.375rem] mb-5'>
                რას ფიქრობ არსებულ გარემოზე: <br /> რა მოგწონს, რას დაამატებდი,
                რას შეცვლიდი?
              </p>
              <TextArea name='tell_us_your_opinion_about_us' />
            </div>
            <div className='flex items-center justify-end mt-14'>
              {error && <p className='text-red-500'>დაფიქსირდა შეცდომა</p>}
              <button className='font-contractica px-7 py-4 bg-light-blue text-white rounded-[2.625rem]'>
                დასრულება
              </button>
            </div>
          </form>
        </div>
        <div className='relative w-[43.938rem] h-[43.938rem] mt-16'>
          <img
            src={BikeImg}
            alt='biker and office door'
            className='z-20 absolute top-0 left-0'
          />
          <img
            src={HeartImg}
            alt='transitional heart on office door'
            className='absolute animate-heartAnimation z-10'
          />
        </div>
        <Link
          to='/vaccination'
          className='absolute bottom-6 left-[45%] -translate-x-1/2'
        >
          <PrevArrow />
        </Link>
      </FormWrapper>
    </FormProvider>
  );
};

export default TipsPage;
