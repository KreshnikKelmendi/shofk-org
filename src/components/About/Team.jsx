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
    altText: "Naser Salihu Avatar"
  },
  {
    name: "Jese Leos",
    role: "CTO",
    description: "Jese drives the technical strategy of the flowbite platform and brand.",
    imgSrc: member2,
    altText: "Jese Leos Avatar"
  },
  {
    name: "Michael Gough",
    role: "Senior Front-end Developer",
    description: "Michael drives the technical strategy of the flowbite platform and brand.",
    imgSrc: member3,
    altText: "Michael Gough Avatar"
  },
  {
    name: "Lana Byrd",
    role: "Marketing & Sale",
    description: "Lana drives the technical strategy of the flowbite platform and brand.",
    imgSrc: member4,
    altText: "Lana Byrd Avatar"
  },
  {
    name: "Lana Byrd",
    role: "Marketing & Sale",
    description: "Lana drives the technical strategy of the flowbite platform and brand.",
    imgSrc: member4,
    altText: "Lana Byrd Avatar"
  }
];

const Team = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-50 pt-10">
      <div className="container mx-auto px-4 font-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold uppercase font-custom">
            {t('OurTeam')}
          </h2>
          <p className="lg:mx-auto lg:w-1/2">
            Tailus prides itself not only on award-winning technology, but also on the talent of 
            its people of some of the brightest minds and most experienced executives in business.
          </p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          {teamMembers?.map((member, index) => (
            <div key={index} className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={member.imgSrc}
                alt={member.altText}
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-lg">{member.name}</h4>
                <span className="block text-sm text-gray-500">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
