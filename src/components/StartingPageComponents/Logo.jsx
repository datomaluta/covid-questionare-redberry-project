import { LogoImg } from 'assets';

const Logo = () => {
  return (
    <img
      className='animate-logoAnimation block w-[6.25rem]'
      src={LogoImg}
      alt='logo'
    />
  );
};

export default Logo;
