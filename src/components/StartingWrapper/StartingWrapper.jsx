const StartingWrapper = (props) => {
  return (
    <div className='bg-light-grey h-screen overflow-hidden gap-[6.25rem] flex items-center pt-80 flex-col'>
      {props.children}
    </div>
  );
};

export default StartingWrapper;
