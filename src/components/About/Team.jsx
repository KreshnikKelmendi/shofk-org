import React from 'react';
import member1 from "../img/nasersalihu.jpg"
import member2 from "../img/nasersalihu.jpg"
import member3 from "../img/nasersalihu.jpg"
import member4 from "../img/nasersalihu.jpg"
import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    name: "Prof. Naser Salihu",
    role: "President of Kosovo Association of Ophthalmologists",
 
    imgSrc: member1,
    altText: "Bonnie Avatar"
  },
  {
    name: "Jese Leos",
    role: "CTO",
    description: "Jese drives the technical strategy of the flowbite platform and brand.",
    imgSrc: member2,
    altText: "Jese Avatar"
  },
  {
    name: "Michael Gough",
    role: "Senior Front-end Developer",
    description: "Michael drives the technical strategy of the flowbite platform and brand.",
    imgSrc: member3,
    altText: "Michael Avatar"
  },
  {
    name: "Lana Byrd",
    role: "Marketing & Sale",
    description: "Lana drives the technical strategy of the flowbite platform and brand.",
    imgSrc: member4,
    altText: "Sofia Avatar"
  }
];

const Team = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto lg:py-6 lg:px-16">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-lg uppercase tracking-tight font-extrabold text-gray-900 font-custom">
            {t('OurTeam')}
          </h2>
          <p className="font-light lg:mb-16 font-custom text-sm 2xl:text-base">
            {t('DescriptionTeam')}
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="items-center bg-gray-100 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <img className="w-[250px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src={member.imgSrc} alt={member.altText} />
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 font-custom">
                     {member.name}
                </h3>
                <span className="text-gray-500 dark:text-gray-400 font-custom">{member.role}</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 font-custom">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
