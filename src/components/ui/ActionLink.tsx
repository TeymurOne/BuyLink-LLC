import { Link } from 'react-router-dom';

export default function ActionLink({ icon, to, onClick }: any) {
  return (
    <>
      <Link
        to={to}
        onClick={onClick}
        className="bg-[#DFE8FA] rounded-[60px] w-[34px] h-[34px] grid place-items-center"
      >
        <img src={icon} alt="" className="w-[20px] h-[20px]" />
      </Link>
    </>
  );
}
