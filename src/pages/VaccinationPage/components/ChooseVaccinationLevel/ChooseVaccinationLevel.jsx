import { RadioInput } from 'components';

const ChooseVaccinationLevel = () => {
  return (
    <div className='mt-12'>
      <p className='font-HelveticaNeueBold text-[1.375rem]'>
        აირჩიე რა ეტაპზე ხარ*
      </p>
      <RadioInput
        id='vaccinated_first_registered_second'
        value='vaccinated_first_registered_second'
        name='vaccination_level'
        answer='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
      />
      <RadioInput
        id='vaccinated_fully'
        value='vaccinated_fully'
        name='vaccination_level'
        answer='სრულად აცრილი ვარ'
      />
      <RadioInput
        id='vaccinated_first_not_registered_second'
        value='vaccinated_first_not_registered_second'
        name='vaccination_level'
        answer='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
      />
    </div>
  );
};

export default ChooseVaccinationLevel;
