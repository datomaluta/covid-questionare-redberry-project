import logo from 'assets/images/logo.png';

const Logo = () => {
  return (
    <img
      className='animate-logoAnimation block w-[6.25rem]'
      src={logo}
      alt='logo'
    />
  );
};

export default Logo;
