import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a href="https://github.com/issaafalkattan" rel="nofollow">
              Issaaf Kattan
            </a>
          </p>
        </div>
      </div>
      <div id="contact" className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Контакты</h2>
        <div className="mt-4 text-base leading-6 text-gray-800 dark:text-gray-400">
          <p>МОСКВА</p>
          <p>115054, г. Москва, Стремяный переулок, д. 36</p>
          <p>Тел.: +7 (495) 745-45-64</p>
          <p>Факс: +7 (495) 797-56-60</p>
          <p>Email: <a href="mailto:reception@VRTS.ru" className="text-primary hover:underline">reception@VRTS.ru</a></p>
        </div>
        <div className="mt-4">
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
