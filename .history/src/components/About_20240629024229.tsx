import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <h2 className="text-3xl font-light leading-9 tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-10">VR Tech Solutions </h2>
        </div>
      </div>
        <div className="mt-4 text-base leading-6 text-gray-800 dark:text-gray-400">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            <a 
              href="https://yandex.ru/maps/?text=115054, г. Москва, Стремяный переулок, д. 36" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary"
            >
              115054, г. Москва, Стремяный переулок, д. 36
            </a></p>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            Тел.: <a href="tel:+74957454564" className="text-primary hover:underline">+7 (495) 745-45-64</a></p>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">Факс: <a href="tel:+74957975660" className="text-primary hover:underline"> +7 (495) 797-56-60 </a></p>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            Почта:{' '}
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
