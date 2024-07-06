import React, { useContext } from 'react';
import OptionsModule from './Options.module.scss';
import header from '../../../../content/header.json';
import { useLanguage } from '@/app/context';

function Options() {
  const { languageOption } = useLanguage();

  return (
    <ul className={OptionsModule.items}>
      {header[languageOption].navOptions.map((item: string) => {
        return (
          <li key={item}>
            <a>{item}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Options;
