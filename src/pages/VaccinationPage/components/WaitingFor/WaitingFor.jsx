import { RadioInput } from 'components';

const WaitingFor = () => {
  return (
    <div className='mt-12'>
      <p className='font-HelveticaNeueBold text-[1.375rem]'>რას ელოდები?*</p>
      <RadioInput
        id='registered_and_waiting'
        value='registered_and_waiting'
        name='what_are_you_waiting_for'
        answer='დარეგისტრირებული ვარ და ველოდები რიცხვს'
      />
      <RadioInput
        id='not_going'
        value='not_going'
        name='what_are_you_waiting_for'
        answer='არ ვგეგმავ'
      />
      <RadioInput
        id='have_covid_and_going_to_vaccinate'
        value='have_covid_and_going_to_vaccinate'
        name='what_are_you_waiting_for'
        answer='კოვიდი მაქვს და ვგეგმავ აცრას'
      />
    </div>
  );
};

export default WaitingFor;
