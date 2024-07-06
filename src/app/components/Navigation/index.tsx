import React from 'react';
import navigation from './Navigation.module.scss';
import Options from './Options';
import ButtonTranslate from './ButtonTranslate';

function Navigation() {
  return (
    <nav className={navigation.navigation}>
      <Options />
      <ButtonTranslate />
    </nav>
  );
}

export default Navigation;
