import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo-buylink.jpg';
import SidebarLinkGroup from './SidebarLinkGroup';
import { useTranslation } from 'react-i18next';
import { version } from '../../package.json';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const { t } = useTranslation();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-999 flex h-screen w-[260px] flex-col overflow-y-hidden bg-menuBorder duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-center gap-2 px-6 pt-5.5 lg:pt-6.5">
        <NavLink to="/">
          <img className="h-19 w-19 " src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden "
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className=" px-4 py-4  lg:px-6">
          <div>
            <h3 className=" ml-[-6px] text-[11px] font-semibold text-titleColor">
              {t('member.16')}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/admin' || pathname.includes('dashboard')
                }
              >
                {() => {
                  return (
                    <>
                      <div>
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-3">
                          <li>
                            <NavLink
                              to="/admin/balance"
                              className={`group relative flex items-center gap-2.5 rounded-md text-[16px] font-normal duration-300 ease-in-out hover:text-white ${
                                pathname.startsWith('/admin/balance')
                                  ? 'text-white'
                                  : 'text-[#abb9e8]'
                              }`}
                            >
                              <p className="ml-[-13px]">-</p>
                              {t('member.13')}
                            </NavLink>
                          </li>
                          <li className="my-1">
                            <NavLink
                              to="/admin"
                              className={`group relative  ${
                                pathname === '/admin'
                                  ? 'text-white'
                                  : 'text-[#abb9e8]'
                              } flex items-center gap-2.5 rounded-md text-[16px]  font-normal  duration-300 ease-in-out hover:text-white`}
                            >
                              <p className="ml-[-13px]">-</p>
                              {t('member.12')}
                            </NavLink>
                          </li>

                          <li className="my-1">
                            <NavLink
                              to="/admin/branch/all"
                              className={`group relative ${
                                pathname.startsWith('/admin/branch')
                                  ? 'text-white'
                                  : 'text-[#abb9e8]'
                              } flex items-center gap-2.5 rounded-md  text-[16px]   font-normal text-[#abb9e8] duration-300 ease-in-out hover:text-white`}
                            >
                              <p className="ml-[-13px]">-</p>
                              {t('branch.0')}
                            </NavLink>
                          </li>
                          <li className="my-1">
                            <NavLink
                              to="/admin/category/all"
                              className={`group ${
                                pathname.startsWith('/admin/category')
                                  ? 'text-white'
                                  : 'text-[#abb9e8]'
                              } relative flex items-center gap-2.5 rounded-md  text-[16px]   font-normal text-[#abb9e8] duration-300 ease-in-out hover:text-white`}
                            >
                              <p className="ml-[-13px]">-</p>
                              {t('product.13')}
                            </NavLink>
                          </li>
                          <li className="my-1">
                            <NavLink
                              to="/admin/product/all"
                              className={`group relative flex items-center gap-2.5 rounded-md ${
                                pathname.startsWith('/admin/product')
                                  ? 'text-white'
                                  : 'text-[#abb9e8]'
                              }  text-[16px]   font-normal text-[#abb9e8] duration-300 ease-in-out hover:text-white`}
                            >
                              <p className="ml-[-13px]">-</p>
                              {t('product.0')}
                            </NavLink>
                          </li>
                          <li className="my-1">
                            <NavLink
                              to="/admin/operator/all"
                              className={`group ${
                                pathname.startsWith('/admin/operator')
                                  ? 'text-white'
                                  : 'text-[#abb9e8]'
                              } relative flex items-center gap-2.5 rounded-md  text-[16px]   font-normal text-[#abb9e8] duration-300 ease-in-out hover:text-white`}
                            >
                              <p className="ml-[-13px]">-</p>
                              {t('operator.0')}
                            </NavLink>
                          </li>
                          <li className="my-1">
                            <NavLink
                              to="/admin/partnerform"
                              className={`group relative ${
                                pathname.startsWith('/admin/partnerform')
                                  ? 'text-white'
                                  : 'text-[#abb9e8]'
                              } flex items-center gap-2.5 rounded-md  text-[16px]   font-normal text-[#abb9e8] duration-300 ease-in-out hover:text-white`}
                            >
                              <p className="ml-[-13px]">-</p>
                              {t('partnerinfo.0')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mt-auto flex items-center justify-center bg-menuBorder p-6 text-sm text-white text-opacity-65">
        v {version}
      </div>
    </aside>
  );
};

export default Sidebar;
