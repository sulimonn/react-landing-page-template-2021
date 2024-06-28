import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
      </div>
        <div className="mt-4 text-base leading-6 text-gray-800 dark:text-gray-400">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">МОСКВА</p>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            <a 
              href="https://yandex.ru/maps/?text=115054, г. Москва, Стремяный переулок, д. 36" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              115054, г. Москва, Стремяный переулок, д. 36
            </a></p>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">Тел.: +7 (495) 745-45-64</p>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">Факс: +7 (495) 797-56-60</p>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            Email:{' '}
            <a href="mailto:reception@VRTS.ru" className="text-primary hover:underline">
              reception@VRTS.ru
            </a>
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
            Заказать звонок
          </button>
        </div>
    </div>
  );
};

export default About;
