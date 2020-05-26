import React from 'react';

import { HeaderLogo } from './Styles/HeaderStyles';
import { HeaderContent } from './Styles/HeaderStyles';
import { HeaderTitle } from './Styles/HeaderStyles';
import { HeaderToggle } from './Styles/HeaderStyles';
import '../../style.css';
import ToggleButtons from '../ToggleButtons';
import Logo from './Logo';
import HeaderFormSearch from './HeaderFormSearch';

const Header = () => (
  <header className="header">
    <HeaderLogo>
      <Logo />
    </HeaderLogo>
    <HeaderContent>
      <h1 className="visually-hidden">Welcome to the netflixRoulette!</h1>
      <HeaderTitle>Find your movie</HeaderTitle>
      <HeaderFormSearch />
      <HeaderToggle>
        <ToggleButtons
          title='Search by'
          leftButton='title'
          rightButton='genre'
        />
      </HeaderToggle>
    </HeaderContent>
  </header>
);

export default Header;
