import React from 'react';
import { useLanguage } from '@/app/context';
import OptionsModule from './Options.module.scss';
import header from '../../../../content/header.json';

interface option {
  name: string;
  href: string;
}

function Options() {
  const { languageOption } = useLanguage();

  return (
    <ul className={OptionsModule.items}>
      {header[languageOption].navOptions.map((item: option) => {
        return (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Options;
