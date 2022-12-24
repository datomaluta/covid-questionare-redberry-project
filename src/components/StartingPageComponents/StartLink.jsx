import { Link } from 'react-router-dom';

const StartLink = () => {
  return (
    <Link
      to='/identification'
      className='group block text-center text-3xl font-bold animate-textAnimation opacity-0 font-contractica text-light-black relative'
    >
      კითხვარის <br /> დაწყება
      <span className='hidden group-hover:block absolute top-[0.05rem] left-[0.15rem] z-[-1] text-fill-transparent text-stroke-light-black text-stroke-2'>
        კითხვარის
        <br /> დაწყება
      </span>
    </Link>
  );
};

export default StartLink;
