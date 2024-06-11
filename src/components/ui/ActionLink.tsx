import { Link } from 'react-router-dom';

export default function ActionLink({ icon, to, onClick, bg }: any) {
  
  return (
    <>
      <Link
        to={to}
        onClick={onClick}
        className={`rounded-[60px]  bg-[${bg}] w-7 h-7 grid place-items-center`}     
      >
        {icon}
      </Link>
    </>
  );
}
