export const localStorageCleaner = () => {
  const inputNames = [
    'number_of_days_from_office',
    'first_name',
    'last_name',
    'email',
    'had_covid',
    'covid_sickness_date',
    'antibodies_test',
    'antibodies_test_date',
    'antibodies_number',
    'had_vaccine',
    'vaccination_stage',
    'i_am_waiting',
    'non_formal_meetings',
    'non_formal_meetings',
    'number_of_days_from_office',
    'what_about_meetings_in_live',
    'tell_us_your_opinion_about_us',
  ];

  inputNames.forEach((input) => localStorage.removeItem(input));
};
