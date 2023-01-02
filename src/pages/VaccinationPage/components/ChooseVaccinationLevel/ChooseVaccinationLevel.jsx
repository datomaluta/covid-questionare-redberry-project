import { RadioInput } from 'components';

const ChooseVaccinationLevel = () => {
  return (
    <div className='mt-12'>
      <p className='font-HelveticaNeueBold text-[1.375rem] text-light-black'>
        აირჩიე რა ეტაპზე ხარ*
      </p>
      <RadioInput
        id='first_dosage_and_registered_on_the_second'
        value='first_dosage_and_registered_on_the_second'
        name='vaccination_stage'
        answer='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
        rules={{ required: 'ამ ველის შევსება აუცილებელია' }}
      />
      <RadioInput
        id='fully_vaccinated'
        value='fully_vaccinated'
        name='vaccination_stage'
        answer='სრულად აცრილი ვარ'
      />
      <RadioInput
        id='first_dosage_and_not_registered_yet'
        value='first_dosage_and_not_registered_yet'
        name='vaccination_stage'
        answer='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
      />
    </div>
  );
};

export default ChooseVaccinationLevel;
