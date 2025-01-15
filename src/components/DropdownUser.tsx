import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOut,
  selectCurrentImage,
  selectCurrentUser, setCredentials
} from '../features/auth/authSlice';
import axiosInstance from '../core/lib/axios.config.ts';
import getState from '../data/helpers/cookie.ts';

const DropdownUser =  () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const { t } = useTranslation();
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);
  const navigate = useNavigate();
  const [partnerIds, setPartnerIds] = useState<number[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const tokenget = getState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('/auth/user');

        const user = response.data?.data?.partners;
        setUserData(user);
        dispatch(setCredentials({ ...user }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (tokenget) {
      fetchUserData();
    }
  }, []);

  useEffect(() => {
    const storedPartnerIds = JSON.parse(localStorage.getItem('partnerIds') || '[]');
    setPartnerIds(storedPartnerIds);
    if (storedPartnerIds.length > 0) {
      const savedPartnerId = localStorage.getItem('selectedPartnerId');
      if (!savedPartnerId) {
        localStorage.setItem('selectedPartnerId', storedPartnerIds[0].toString());
        setSelectedPartner(storedPartnerIds[0]);
      } else {
        setSelectedPartner(parseInt(savedPartnerId, 10));
      }
    } else {
      localStorage.removeItem('selectedPartnerId');
      setSelectedPartner(null);
    }
  }, []);

  const handlePartnerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedPartner = userData?.find((partner: any) => partner.id === selectedId);

    if (selectedPartner) {
      localStorage.setItem('selectedPartnerId', selectedId.toString());
      setSelectedPartner(selectedId);
      window.location.reload();
    }
  };

  const handleLogout = () => {
    dispatch(logOut());
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.removeItem('lng');
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  const userImage = useSelector(selectCurrentImage);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {user?.name}
          </span>
          <span className="block text-xs">{user?.phone}</span>
        </span>

        <span className="flex items-center gap-4">
          <span className="h-10 w-10 rounded-full">
            <img
              src={
                userData?.find((partner: any) => partner.id === selectedPartner)
                  ?.image
              }
              className="h-full w-full rounded-[80px] object-cover"
              alt="User"
            />
          </span>
          {selectedPartner && (
            <span className="text-sm font-medium text-black dark:text-white">
              {
                userData?.find((partner: any) => partner.id === selectedPartner)
                  ?.title
              }
            </span>
          )}
        </span>

        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* Dropdown Start */}
      <div
        ref={dropdown}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            {partnerIds.length > 1 ? (
              <select
                value={selectedPartner || ''}
                onChange={handlePartnerChange}
                className="w-full   cursor-pointer rounded border  border-blue-500 py-2  pl-2 text-black"
              >
                {userData?.map((partner) => (
                  <option key={partner.id} value={partner.id}>
                    {partner.title}
                  </option>
                ))}
              </select>
            ) : (
              <div className=""></div>
            )}
          </li>
          <li>
            <Link
              to="/admin/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              {t('operator.11')}
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          {t('member.15')}
        </button>
      </div>
      {/* Dropdown End */}
    </div>
  );
};

export default DropdownUser;
