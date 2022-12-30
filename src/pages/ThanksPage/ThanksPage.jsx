import { BigStar, LittleStar } from 'assets';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThanksPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  });

  return (
    <div className='w-full h-screen bg-light-black  flex items-center justify-center '>
      <p className='font-contractica tracking-[1rem] text-white text-[4rem] relative animate-formWrapperAnimation'>
        მადლობა
        <img
          src={BigStar}
          alt='big star'
          className='absolute  animate-bigStarAnimation '
        />
        <img
          src={LittleStar}
          alt='little star'
          className='absolute animate-littleStarAnimation'
        />
      </p>
    </div>
  );
};

export default ThanksPage;
