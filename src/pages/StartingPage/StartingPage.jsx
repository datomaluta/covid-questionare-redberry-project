import { StartingWrapper, Logo, StartLink } from 'components';

const StartingPage = () => {
  return (
    <StartingWrapper>
      <Logo />
      <div className='overflow-hidden'>
        <StartLink />
      </div>
    </StartingWrapper>
  );
};

export default StartingPage;
