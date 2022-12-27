import { BikeImg, HeartImg } from 'assets';
import { FormWrapper, PrevArrow, RadioInput } from 'components';

const TipsPage = () => {
  return (
    <FormWrapper page='4'>
      <div className='w-[38.875rem] max-h-[50rem] mt-10 mr-36 overflow-y-scroll overflow-x-hidden scrollbar-none pb-16'>
        <div className='font-HelveticaNeueThin text-[1.375rem]'>
          <p className='mb-4'>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p>
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>
        <form className='mt-10'>
          <div>
            <p className='font-HelveticaNeueBold text-[1.375rem]'>
              რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
              შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
            </p>
            <RadioInput
              id='twice_a_week'
              value='twice_a_week'
              name='non_formal_meetings	'
              answer='კვირაში ორჯერ'
            />
            <RadioInput
              id='once_a_week'
              value='once_a_week'
              name='non_formal_meetings	'
              answer='კვირაში ერთხელ'
            />
            <RadioInput
              id='once_in_a_two_week'
              value='once_in_a_two_week'
              name='non_formal_meetings	'
              answer='ორ კვირაში ერთხელ'
            />
            <RadioInput
              id='once_in_a_month'
              value='once_in_a_month'
              name='non_formal_meetings	'
              answer='თვეში ერთხელ'
            />
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
          </div>

          <div className='mt-10'>
            <p className='font-HelveticaNeueBold text-[1.375rem] mb-5'>
              რას ფიქრობ ფიზიკურ შეკრებებზე?
            </p>
            <textarea className='bg-transparent border border-light-black w-[38.875rem] h-[11.5rem] font-HelveticaNeueThin px-2 py-2'></textarea>
          </div>

          <div className='mt-10'>
            <p className='font-HelveticaNeueBold text-[1.375rem] mb-5'>
              რას ფიქრობ არსებულ გარემოზე: <br /> რა მოგწონს, რას დაამატებდი,
              რას შეცვლიდი?
            </p>
            <textarea className='bg-transparent border border-light-black w-[38.875rem] h-[11.5rem] font-HelveticaNeueThin px-2 py-2'></textarea>
          </div>
          <div className='flex justify-end mt-14'>
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
      <button className='absolute bottom-6 left-[45%] -translate-x-1/2'>
        <PrevArrow />
      </button>
    </FormWrapper>
  );
};

export default TipsPage;
