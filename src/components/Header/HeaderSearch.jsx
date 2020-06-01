import React from 'react';

import {
  HeaderLogo,
  HeaderContent,
  HeaderTitle,
  HeaderToggle,
} from './Styles/HeaderStyles';

import '../../style.css';
import ToggleButtons from '../ToggleButtons';
import Logo from './Logo';
import HeaderFormSearch from './HeaderFormSearch';

const HeaderSearch = () => (
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
          title="Search by"
          leftButton="title"
          rightButton="genre"
        />
      </HeaderToggle>
    </HeaderContent>
  </header>
);

export default HeaderSearch;
