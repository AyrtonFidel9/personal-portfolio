import React from 'react';
import { useLanguage } from '@/app/context';
import { usePathname } from 'next/navigation';
import OptionsModule from './Options.module.scss';
import header from '../../../../content/header.json';

interface option {
  name: string;
  href: string;
}

function Options() {
  const { languageOption } = useLanguage();
  const pathname = usePathname();
  return (
    <ul className={OptionsModule.items}>
      {pathname === '/'
        ? header[languageOption].navOptions.map((item: option) => {
            return (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })
        : header[languageOption].navOptions.map((item: option) => {
            if (item.name === 'Projects')
              return (
                <li key={item.name}>
                  <a href="/projects">{item.name}</a>
                </li>
              );
            return (
              <li key={item.name}>
                <a href="/">{item.name}</a>
              </li>
            );
          })}
    </ul>
  );
}

export default Options;
