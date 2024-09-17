import React, { useEffect, useState } from 'react';
import { itemNav } from "./const";


const Nav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    console.log(sections)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Установить порог пересечения 10% секции
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="static__nav nav hidden lg:block" aria-label="Ссылки для перехода на странице">
    <ul className="nav__list w-max">
      {itemNav.map(item => (
        <li key={item.href} className="nav__item">
          <a href={`${item.href}`} className="nav__link group flex items-center py-3">
            <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all  group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === item.href.replace('#', '') ? 'group-hover:w-16 group-hover:bg-slate-200' : ''}`}></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {`${item.text}`}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
  );
};

export default Nav;