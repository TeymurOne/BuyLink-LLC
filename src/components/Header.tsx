import { useEffect, useState } from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';
import Translate from './Translate';
import DropdownUser from './DropdownUser';
import axiosInstance from '../../src/core/lib/axios.config';
import { useDispatch } from 'react-redux';
import getState from '../data/helpers/cookie';
import { setCredentials } from '../features/auth/authSlice';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [partnerIds, setPartnerIds] = useState<number[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  const dispatch = useDispatch();
  const tokenget = getState();
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('/auth/user');

        const user = response.data?.data?.partners;
        console.log(user)
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

    localStorage.setItem('selectedPartnerId', selectedId.toString());
    setSelectedPartner(selectedId);

    window.location.reload();
  };

  return (
    <header className="lg:drop-shadow-1 top-0 z-9999 flex w-full dark:bg-boxdark dark:drop-shadow-none lg:sticky lg:bg-white">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 lg:shadow-2 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className={`z-999 block rounded-sm p-1.5 dark:border-strokedark dark:bg-boxdark lg:hidden ${
              props.sidebarOpen ? 'hidden' : ''
            }`}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div className="hidden opacity-0 sm:block"></div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <Translate />
          </ul>
          <DropdownUser />

          {partnerIds.length > 1 ? (
            <select
              value={selectedPartner || ''}
              onChange={handlePartnerChange}
              className="rounded   pr-8 py-2 text-black border-blue-500 cursor-pointer"
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

        </div>
      </div>
    </header>
  );
};

export default Header;
