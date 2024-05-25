import React, { useEffect } from 'react';
import shofk_logo from "../img/shofkLogo.png";
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import firstFlag from "../img/united-kingdom.png";
import secondFlag from "../img/albania.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu-2');
    const menuItems = document.querySelectorAll('#mobile-menu-2 a');

    const toggleMenu = () => {
      menu.classList.toggle('hidden');
    };

    const closeMenu = () => {
      menu.classList.add('hidden');
    };

    button.addEventListener('click', toggleMenu);
    menuItems.forEach(item => item.addEventListener('click', closeMenu));

    return () => {
      button.removeEventListener('click', toggleMenu);
      menuItems.forEach(item => item.removeEventListener('click', closeMenu));
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Ensure i18n instance is available
  };

  return (
    <>
    
    <header>
      <nav className="bg-white sticky top-0 left-0 border-gray-200 px-4 lg:px-8 py-5 md:py-7 dark:bg-gray-800 shadow-sm shadow-gray-50">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center lg:order-2 lg:px-8">
            <div className="flex items-center">
              <button onClick={() => changeLanguage('en')}>
                <img src={firstFlag} alt='' className='object-cover h-[20px] w-[20px] hover:scale-125 2xl:w-[25px] 2xl:h-[25px]' title='Translate to English' />
              </button>
              <button onClick={() => changeLanguage('alb')}>
                <img src={secondFlag} alt='' className='object-cover h-[20px] w-[20px] hover:scale-125 2xl:w-[25px] 2xl:h-[25px] ml-2' title='Translate to Albanian' />
              </button>
            </div>
          </div>
          <Link to="/" className="flex items-center mx-auto lg:order-1 lg:mx-0">
            <img
              src={shofk_logo}
              className="lg:w-40 object-contain h-6 sm:h-9"
              alt="Shofk Logo"
            />
          </Link>
          <button
            id="mobile-menu-button"
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:order-3"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden justify-between items-center text-[#044f7c] w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className=" flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/"
                  className="block py-2 pr-4 pl-3 lg:text-sm 2xl:text-lg duration-1000 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  {t("Home")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                  className="block py-2 pr-4 pl-3 lg:text-sm 2xl:text-lg duration-1000 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                    {t("About")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/invited-speakers"
                  className="block py-2 pr-4 pl-3 lg:text-sm 2xl:text-lg duration-1000 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t('InvitedSpeakers')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/venue"
                  className="block py-2 pr-4 pl-3 lg:text-sm 2xl:text-lg duration-1000 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("Venue")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/register"
                  className="block py-2 pr-4 pl-3 lg:text-sm 2xl:text-lg duration-1000 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("Registration")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                  className="block py-2 pr-4 pl-3 lg:text-sm 2xl:text-lg duration-1000 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("Contacts")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;