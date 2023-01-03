const NextArrow = (props) => {
  return (
    <svg
      width='18'
      height='23'
      viewBox='0 0 18 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      cursor={props.cursor}
    >
      <path
        d='M1 1L15 11.3158L1 21.6316'
        stroke={props.color}
        strokeWidth='2.4'
      />
    </svg>
  );
};

export default NextArrow;
