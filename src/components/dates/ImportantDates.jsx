import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const importantDates = [
  {
    title: "Another Important Date",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "#",
    date: "24.10.2024"
  },
  {
    title: "Another Important Date",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "#",
    date: "24.10.2024"
  },
  {
    title: "Yet Another Important Date",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "#",
    date: "24.10.2024"
  },
  {
    title: "Yet Another Important Date",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    link: "#",
    date: "24.10.2024"
  }
];

const ImportantDates = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-gray-50 py-10 px-4 lg:px-10 font-custom'>
      <p className='text-3xl text-center uppercase font-custom'>{t('ImportantDates')}</p>
      <div className='lg:w-[70%] 2xl:w-[50%] mx-auto mt-6 text-center'>
        <p className='font-custom'><b>{t('congress4th')}</b></p>
        <p className='font-custom text-base'>
          {t('ImportantDatesDescription')}
        </p>
      </div>
      <div className='grid lg:grid-cols-4 gap-6'>
      {importantDates.map((date, index) => (
        <div key={index} className="p-6 z-50 mt-8 bg-[#044f7c] h-[100%] shadow-2xl shadow-[#044e7c8a] dark:bg-gray-800 dark:border-gray-700 rounded-md">
            <p className='flex border-b border-b-white p-2 w-fit'><FontAwesomeIcon className='text-sm text-white' icon={faCalendarDays} /><span className='ml-2 text-sm text-white'>{date.date}</span></p>
  
            <h5 className="mb-2 mt-4 text-lg 2xl:text-xl text-justify tracking-tighter font-extrabold text-white dark:text-white">{date.title}</h5>
     
          <p className="mb-3 font-normal text-white">{date.description}</p>
          {/* <a href={date.link} className="inline-flex mt-4 font-custom1 items-center py-2 text-sm text-center text-gray-300 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a> */}
        </div>
      ))}
      </div>
    </div>
  );
}

export default ImportantDates;
