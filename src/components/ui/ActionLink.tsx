import { Link } from 'react-router-dom';

export default function ActionLink({ icon, to, onClick, bg }: any) {
  return (
    <>
      <Link
        to={to}
        onClick={onClick}
        className={`rounded-[60px]  bg-[${bg}] grid h-7 w-7 place-items-center`}
      >
        {icon}
      </Link>
    </>
  );
}
