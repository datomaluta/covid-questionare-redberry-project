import { RadioInput } from 'components';

const WaitingFor = () => {
  return (
    <div className='mt-12'>
      <p className='font-HelveticaNeueBold text-[1.375rem]'>რას ელოდები?*</p>
      <RadioInput
        id='registered_and_waiting'
        value='registered_and_waiting'
        name='i_am_waiting'
        answer='დარეგისტრირებული ვარ და ველოდები რიცხვს'
        rules={{ required: 'ეს ველი აუცილებელია' }}
      />
      <RadioInput
        id='not_planning'
        value='not_planning'
        name='i_am_waiting'
        answer='არ ვგეგმავ'
      />
      <RadioInput
        id=' had_covid_and_planning_to_be_vaccinated'
        value='had_covid_and_planning_to_be_vaccinated'
        name='i_am_waiting'
        answer='კოვიდი მაქვს და ვგეგმავ აცრას'
      />
    </div>
  );
};

export default WaitingFor;
